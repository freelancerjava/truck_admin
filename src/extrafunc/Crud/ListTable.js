import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import {
    Table,
    Media,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Card,
    CardTitle,
    CardBody,
    CardHeader,
    Button,
    Input,
    CardFooter,
    Pagination,
    PaginationItem,
    PaginationLink,
    Spinner,
    Container,
    Jumbotron,
    Fade
} from 'reactstrap';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { useQuery, useMutation } from 'react-query';
import { delCat } from '../../features/categories/query';
import moment from 'moment'
import { getParameterByName } from '..';

const ListTable = ({ router, history, title, headers, edit_link, view_link, add_link, id, query_key, query_fn, cnt_query_fn, query_filter, mut_delete_fn, filters, innerFilters }) => {


    const [searchfilter, setsearchfilter] = useState(router.location.query.srchfltr || '')
    const [filter, setfilter] = useState(router.location.query.fltr || 0)
    const [innerFilter, setInnerFilter] = useState(router.location.query.in_fltr || 0)
    const [paginationValue, setPaginationValue] = useState(parseInt(router.location.query.pagging) || 1);
    const [page, setPage] = useState(parseInt(router.location.query.page) || 0);
    const [checked, setChecked] = useState(router.location.query.checked || null);

    useEffect(() => {
        if (router.action === 'POP' || router.action === 'PUSH') {
            setfilter(router.location.query.fltr || 0)
            setInnerFilter(router.location.query.in_fltr || 0)
            setPaginationValue(parseInt(router.location.query.pagging) || 1)
            setPage(router.location.query.page || 0)
        }
        return () => {
        }
    }, [setfilter, router]);


    const [orderDirection, setorderDirection] = useState(false);
    const [orderType, setorderType] = useState('id');
    let new_query_filter = query_filter
    new_query_filter.order = [`${orderType} ${orderDirection ? 'ASC' : 'DESC'}`]

    const getField = (prop) => {
        let p = {}
        const makeObj = (obj) => {
            let arrprop = prop.split('.')
            arrprop.map((item) => {
                p[item] = {}
                makeObj(p[item])
            })
        }
        makeObj(p)

        return p
    }

    new_query_filter = { ...new_query_filter, limit: 10 * paginationValue, skip: 10 * page * paginationValue }


    if (filters) {
        let sort = filters.data.filter((item, key) => key == filter)[0]
        new_query_filter['where'] = {};
        sort && (new_query_filter['where'][filters.field] = sort.value)
    }
    if (innerFilters) {
        let sort = innerFilters.data.filter((item, key) => key == innerFilter)[0]
        !new_query_filter['where'] && (new_query_filter['where'] = {})
        sort && (new_query_filter['where'][innerFilters.field] = sort.value)
    }

    if (searchfilter) {
        !new_query_filter['where'] && (new_query_filter['where'] = {})
        new_query_filter['where']['id'] = searchfilter
    }

    let countWhere = JSON.stringify(new_query_filter.where)
    new_query_filter = JSON.stringify(new_query_filter)
    const querydata = useQuery([query_key, { filter: new_query_filter }], query_fn)
    const countdata = useQuery(['count', { where: countWhere }], cnt_query_fn)
    const [delMut, delMutRes] = useMutation(mut_delete_fn, {
        onSuccess: () => {
            querydata.refetch()
        }
    })
    const [data, setData] = useState([])
    const [count, setCount] = useState(0)

    const pagesArrayLength = Math.ceil(count / (paginationValue * 10))
    const pagesArr = Array.from({ length: pagesArrayLength }, (v, k) => {
        if (k == 0) return k
        if (k == pagesArrayLength - 1) return k
        if (k == page - 1) return k
        if (k == page) return k
        if (k == page + 1) return k
        // else return null
        // return k
    })



    useEffect(() => {
        let cancel = false
        if (!cancel) {
            if (querydata.data) {
                setData(querydata.data.map((item, key) => {
                    return {
                        ...item,
                        check: false
                    }
                }))
            } else {
                setData([])
            }
            if (countdata.data) {
                setCount(parseInt(countdata.data.count))
            } else {
                setCount(0)
            }
            cancel = true

        }
    }, [querydata.data, countdata.data])

    /** Checkboxes **/

    const areAllCheckboxesSelected = data.every(
        key => key.check === true
    );

    const hasSomeCheckboxesSelected = data.some(
        key => key.check === true
    );

    const handleChange = () => {
        const valueToSet = !areAllCheckboxesSelected;
        setData(
            data.map((item, key) => {
                item.check = valueToSet;
                return item;
            })
        )

    };

    /** Checkboxes **/

    return (
        <div className='list-table'>
            {filters &&
                <div className='mb-2 p-2'>
                    <Filters filters={filters} filter={filter} setfilter={setfilter} history={history} setPage={setPage} />
                </div>
            }
            <Card>
                <CardHeader
                    className="d-flex justify-content-between align-items-center">
                    <CardTitle
                        tag="h2"
                        className="mb-0 fw-700">
                        {title}
                    </CardTitle>

                    {innerFilters && <InnerFilters setPage={setPage} history={history} filters={innerFilters} filter={innerFilter} setfilter={setInnerFilter} />}

                    <div className='d-flex justify-content-between align-items-center'>
                        <Input className={'mr-3 w-25'} type='select' width={1}
                            value={paginationValue}
                            onChange={(e) => {
                                setPaginationValue(parseInt(e.target.value))
                                historyCorrect({ history: history, param: { name: 'pagging', value: e.target.value }, page: true })
                                setPage(0)
                            }}>
                            <option value={1}>10</option>
                            <option value={2}>20</option>
                            <option value={3}>30</option>
                            <option value={4}>40</option>
                        </Input>
                        <Input type='text' placeholder='Поиск' className='mr-5' width={2} onChange={(e) => {
                            console.log('value', e.target.value);
                            setsearchfilter(e.target.value)
                        }} />
                        {add_link && <Link to={add_link}>
                            <Button color={"primary"} size={'sm'}>
                                Добавить запись
                            </Button>
                        </Link>}
                    </div>

                </CardHeader>
                <CardBody>
                    {/* <div className='w-100 d-flex justify-content-start p-2'>
                        {hasSomeCheckboxesSelected && <><Button color='danger' size='sm'>Delete</Button></>}
                    </div> */}
                    {countdata.isLoading || querydata.isLoading ?
                        <div className='d-flex justify-content-center align-items-center w-100 p-5'>
                            <Spinner style={{ width: '3rem', height: '3rem' }} color="primary" />
                        </div>
                        :
                        <Fade in={true}>
                            <Table className="align-items-center table-flush p-small" responsive>
                                <thead className="">
                                    <tr>
                                        <th>
                                            <input type='checkbox'
                                                indeterminate={hasSomeCheckboxesSelected && !areAllCheckboxesSelected}
                                                onChange={handleChange}
                                                // someChecked={hasSomeCheckboxesSelected && !areAllCheckboxesSelected}
                                                checked={areAllCheckboxesSelected}
                                            />
                                        </th>
                                        {/* <th>#</th> */}
                                        {headers.map((item, key) => {
                                            return (
                                                item.excludeFilter && item.excludeFilter.includes(filter) ?
                                                    null : <th key={key} scope="col"
                                                        onClick={() => {
                                                            if (item.sort) {
                                                                setorderType(item.sort)
                                                                setorderDirection(!orderDirection)
                                                            }
                                                        }}
                                                    ><strong className={`${item.sort ? 'hoverable' : ''}`}>{item.name} {item.sort ? <i className={`fa fa-sort hoverable`} /> : null}</strong></th>
                                            )
                                        })}
                                        <th scope="col" />
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data.map((item, key) => {
                                        return (
                                            <tr
                                                className={`${key % 2 == 0 ? 'odd' : ''} hoverable`}
                                                name='trow'
                                                key={key}
                                                onClick={(e) => {
                                                    // console.log(e.target.tagName);
                                                    setChecked(item.id)
                                                    historyCorrect({ history: history, param: { name: 'checked', value: item.id } })
                                                    setData(data.map((checkitem, index) => {
                                                        if (key == index) checkitem.check = !item.check
                                                        return checkitem
                                                    }));
                                                    if (e.target.tagName !== 'A' && e.target.tagName !== 'I' && e.target.tagName !== 'INPUT')
                                                        view_link ? history.push(`${view_link}/${item[id]}`) :
                                                            edit_link ? history.push(`${edit_link}/${item[id]}`) : console.log('');

                                                }}>
                                                <td>
                                                    <input type='checkbox'
                                                        checked={item.check || checked == item.id}
                                                        onChange={(e) => {
                                                            if (item.id == checked) setChecked(null)
                                                            else setChecked(item.id)
                                                            // historyCorrect({ history: history, param: { name: 'checked', value: item.id == checked && null || item.id } })
                                                            setData(data.map((checkitem, index) => {
                                                                if (key == index) checkitem.check = !item.check
                                                                return checkitem
                                                            }));
                                                        }}
                                                    />
                                                </td>
                                                {/* <th>{key + 1}</th> */}
                                                {headers.map((header, key) => {
                                                    return (
                                                        // <td key={key} scope="col">{item[header.key]}</td>
                                                        header.excludeFilter && header.excludeFilter.includes(filter) ?
                                                            null : <CustomTd item={item} header={header} key={key} data={data} />
                                                    )
                                                })}
                                                <td className="text-right" name='options'>
                                                    <UncontrolledDropdown>
                                                        <DropdownToggle
                                                            className="btn-icon-only text-light"
                                                            href="#pablo"
                                                            role="button"
                                                            size="sm"
                                                            color=""
                                                            onClick={e => e.preventDefault()}
                                                        >
                                                            <i className="fas fa-ellipsis-v" />
                                                        </DropdownToggle>
                                                        <DropdownMenu className="dropdown-menu-arrow" right>
                                                            <Link
                                                                to={`${edit_link}/${item[id]}`}>
                                                                <DropdownItem
                                                                    href="#pablo"
                                                                >Изменить</DropdownItem>
                                                            </Link>
                                                            <DropdownItem
                                                                href="#123"
                                                                onClick={e => {
                                                                    e.preventDefault()
                                                                    delMut({ id: item.id })
                                                                }}
                                                            >Удалить</DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledDropdown>
                                                </td>
                                            </tr>

                                        )
                                    })}
                                </tbody>
                            </Table>
                        </Fade>
                    }
                </CardBody>
                <CardFooter>
                    <nav aria-label="...">
                        {/* {console.log('ceil', Math.ceil(count / (paginationValue * 10)), page)} */}
                        {count > 0 && <Pagination
                            className="pagination justify-start mb-0"
                            listClassName="justify-content-start mb-0 align-items-center"
                        >
                            <PaginationItem className={`${page == 0 ? 'disabled' : ''}`} onClick={() => {
                                if (page != 0) {
                                    setPage(page - 1)
                                    historyCorrect({ history: history, param: { name: 'page', value: page - 1 } })
                                }
                            }}>
                                <PaginationLink
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                    tabIndex="-1"
                                >
                                    <i className="fas fa-angle-left" />
                                    <span className="sr-only"> Previous </span>{" "}
                                </PaginationLink>
                            </PaginationItem>
                            {pagesArr.map((item, key) => {
                                return (
                                    item != null ?
                                        <PaginationItem className={`${page == item ? 'active' : ''}`}
                                            onClick={() => {
                                                setPage(item)
                                                historyCorrect({ history: history, param: { name: 'page', value: item } })
                                            }}>
                                            <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                                                {item + 1}{" "}
                                            </PaginationLink>
                                        </PaginationItem> : <span className={`${key === Math.ceil(pagesArrayLength / 2) || key == page + 2 || key == page - 2 ? 'paginationLink' : ''} `}></span>
                                )
                            })}
                            <PaginationItem
                                className={`${page == pagesArrayLength ? 'disabled' : ''}`}
                                onClick={() => {
                                    if (page != Math.ceil(count / (paginationValue * 10)) - 1) {
                                        let p = parseInt(page)
                                        setPage(p + 1)
                                        historyCorrect({ history: history, param: { name: 'page', value: p + 1 } })
                                    }
                                }}>
                                <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()} >
                                    <i className="fas fa-angle-right" />
                                    <span className="sr-only"> Next </span>{" "}
                                </PaginationLink>
                            </PaginationItem>
                            <Button size='sm' color='white' className='ml-2' close>
                                Total: {count}
                            </Button>
                        </Pagination>}
                    </nav>
                </CardFooter>
            </Card>

        </div>
    )
}

export default withRouter(connect((state) => {
    return { router: state.router }
})(ListTable))

const CustomTd = ({ item, header, key }) => {
    if (header.date) {
        return (
            <td key={key} scope="col">
                {moment(item[header.key]).format('DD.MM.YYYY')}
            </td>
        )
    } else if (header.datentime) {
        return (
            <td key={key} scope="col">
                {moment(item[header.key]).format('DD.MM.YYYY')} в {moment(item[header.key]).format('hh:mm')}
            </td>
        )
    } else if (header.time) {
        // console.log(header.keys[0]);

        let tditem = [
            <div>
                {item[header.keys[0]] && item[header.keys[1]]
                    ? moment(item[header.keys[1]]).diff(moment(item[header.keys[0]]), 'hours')
                    : '0'} часов
                </div>
        ]
        {
            header.keys.map((keyItem) => {
                tditem.push(<div>{getProp(item, keyItem) && moment(getProp(item, keyItem)).format('DD.MM.YYYY') || header.def_val}</div>)
            })
        }
        return (
            <td key={key} scope="col">
                {tditem}
            </td>
        )
    } else if (header.media) {
        return (
            <td key={key} scope="col">
                <Media className="align-items-center">
                    <a
                        className="avatar rounded mr-3"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        <img
                            alt={header.key}
                            src={getProp(item, header.key, true) || require("../../assets/img/tempfile.png")}
                        />
                    </a>
                    <Media>
                        <span className="mb-0 text-sm">
                            {/* {"url"} */}
                        </span>
                    </Media>
                </Media>
            </td>
        )
    } else if (header.keys) {
        let tditem = []
        {
            header.keys.map((keyItem) => {
                tditem.push(<div className='mr-1'>{getProp(item, keyItem) || header.def_val}</div>)
            })
        }
        return (
            <td key={key} scope="col">
                <div className='d-flex flex-wrap'>{tditem}</div>
            </td>
        )
    } else if (header.key) {
        return (
            <td key={key} scope="col">{getProp(item, header.key) || header.def_val}</td>
        )
    }

}

const getProp = (object, props, media = false) => {
    const arrprop = props.split('.')

    let prop = object
    arrprop.map(item => {
        if (prop == null) return 'не присвоено!'
        prop = prop[item]
    })
    // if(prop == 1) return '1'
    if (prop === true) return 'true'
    if (prop === false) return 'false'
    if (prop && prop.length > 25 && !media) {
        prop = prop.substr(0, 25) + ' ... '
    }
    return prop
}

const Filters = ({ filters, filter, setfilter, history, setPage }) => {
    return (
        <div>
            {filters.data.map((item, key) => {
                return (
                    <Button
                        className={(filter == key) ? item.class : null}
                        size={'sm'}
                        onClick={() => {
                            setfilter(key)
                            setPage(0)
                            historyCorrect({ history: history, param: { name: 'fltr', value: key }, page: true })
                        }}
                        key={key}
                        color={`${(filter == key) ? 'primary' : 'link'}`}>
                        {item.name}
                    </Button>
                )
            })}
        </div>
    )
}

const InnerFilters = ({ filters, filter, setfilter, history, setPage }) => {
    return (
        <div className='inner-filters mr-3'>
            {filters.data.map((item, key) => {
                return (
                    <Button
                        size={'sm'}
                        onClick={() => {
                            setfilter(key)
                            setPage(0)
                            historyCorrect({ history: history, param: { name: 'in_fltr', value: key }, page: true })
                        }}
                        key={key}
                        color={`${(filter == key) ? 'primary' : ''}`}>
                        {item.name}
                    </Button>
                )
            })}
        </div>
    )
}

const historyCorrect = ({ history, param, page = false }) => {
    const path = []
    let pathname = '?'
    page ? path.push('page=0') : path.push(`page=${param.name === 'page' ? param.value : getParameterByName('page')}`)
    path.push(`pagging=${param.name === 'pagging' ? param.value : getParameterByName('pagging')}`)
    path.push(`fltr=${param.name === 'fltr' ? param.value : getParameterByName('fltr')}`)
    path.push(`in_fltr=${param.name === 'in_fltr' ? param.value : getParameterByName('in_fltr')}`)
    path.push(`checked=${param.name === 'checked' ? param.value : getParameterByName('checked')}`)
    path.map((item, key) => {
        let amp = key != path.length - 1 ? '&' : ''
        if (!item.includes('null')) pathname = pathname + item + amp
    })
    history.push(history.location.pathname + pathname)

    return pathname
}

