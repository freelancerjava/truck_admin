import React, { useState, useEffect } from 'react';
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
    PaginationLink
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { useQuery, useMutation } from 'react-query';
import { delCat } from '../../features/categories/query';

const ListTable = ({ history, title, headers, edit_link, view_link, add_link, id, query_key, query_fn, cnt_query_fn, query_filter, mut_delete_fn, filters, innerFilters }) => {


    const [filter, setfilter] = useState(0)
    const [innerFilter, setInnerFilter] = useState(0)
    const [paginationValue, setPaginationValue] = useState(1);
    const [page, setPage] = useState(0);
    let new_query_filter = query_filter
    new_query_filter.order = 'id DESC'

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



    useEffect(() => {
        let cancel = false
        if (!cancel) {
            if (querydata.data) {
                setData(querydata.data)
            } else {
                setData([])
            }
            if (countdata.data) {
                setCount(parseInt(countdata.data.count))
            } else {
                setData(0)
            }
            cancel = true
        }
    }, [querydata.data, countdata.data])

    return (
        <>
            {filters && <Card className='mb-2 p-2'>
                <Filters filters={filters} filter={filter} setfilter={setfilter} />
            </Card>}
            <Card>
                <CardHeader
                    className="d-flex justify-content-between align-items-center">
                    <CardTitle
                        tag="h5"
                        className="mb-0">
                        {title}
                    </CardTitle>
                    {innerFilters && <InnerFilters filters={innerFilters} filter={innerFilter} setfilter={setInnerFilter} />}
                    <div className='d-flex justify-content-between align-items-center'>
                        <Input className={'mr-3'} type='select' width={1} onChange={(e) => {
                            setPaginationValue(parseInt(e.target.value))
                            setPage(0)
                        }}>
                            <option value={1}>10</option>
                            <option value={2}>20</option>
                            <option value={3}>30</option>
                            <option value={4}>40</option>
                        </Input>
                        <Input type='text' placeholder='Поиск' className='mr-5' width={2} />
                        <Link to={add_link}>
                            <Button color={"primary"} size={'sm'}>
                                Добавить запись
                        </Button>
                        </Link>
                    </div>

                </CardHeader>
                <CardBody>
                    <Table className="align-items-center table-flush p-small" responsive>
                        <thead className="">
                            <tr>
                                <th><input type='checkbox' /></th>
                                {headers.map((item, key) => {
                                    return (
                                        <th key={key} scope="col">{item.name}</th>
                                    )
                                })}
                                <th scope="col" />
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((item, key) => {
                                return (
                                    <tr
                                        className={`hoverable ${key % 2 == 0 ? 'odd' : ''}`}
                                        name='trow'
                                        key={key}
                                        onClick={(e) => {
                                            // console.log(e.target.tagName);
                                            if (e.target.tagName !== 'A' && e.target.tagName !== 'I' && e.target.tagName !== 'INPUT')
                                                view_link ? history.push(`${view_link}/${item[id]}`) :
                                                    history.push(`${edit_link}/${item[id]}`)
                                        }}>
                                        <td><input type='checkbox' /></td>
                                        {headers.map((header, key) => {
                                            return (
                                                // <td key={key} scope="col">{item[header.key]}</td>
                                                <CustomTd item={item} header={header} key={key} data={data} />
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
                </CardBody>
                <CardFooter>
                    <nav aria-label="...">
                        {console.log('ceil', Math.ceil(count / (paginationValue * 10)), page)}
                        <Pagination
                            className="pagination justify-start mb-0"
                            listClassName="justify-content-start mb-0"
                        >
                            <PaginationItem className={`${page == 0 ? 'disabled' : ''}`} onClick={() => {
                                page != 0 && setPage(page - 1)
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
                            {Array.from({ length: Math.ceil(count / (paginationValue * 10)) }, (v, k) => {
                                // if (k == 0) return k
                                // else if (k == Math.ceil(count / paginationValue) - 1) return k
                                // else if (k == Math.ceil(count / paginationValue / 2)) return k
                                // else if (k == Math.ceil(count / paginationValue / 5)) return k
                                // else return k
                                return k
                            }).map((item, key) => {
                                return (
                                    <PaginationItem className={`${page == item ? 'active' : ''}`}
                                        onClick={() => {
                                            setPage(item)
                                        }}>
                                        <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                                            {item + 1}{" "}
                                        </PaginationLink>
                                    </PaginationItem>
                                )
                            })}
                            {/* <PaginationItem className="active">
                                <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                                    1{" "}
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                                    2 <span className="sr-only"> (current) </span>{" "}
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()}>
                                    3{" "}
                                </PaginationLink>
                            </PaginationItem> */}
                            <PaginationItem
                                className={`${page == Math.ceil(count / (paginationValue * 10)) - 1 ? 'disabled' : ''}`}
                                onClick={() => {
                                    page != Math.ceil(count / (paginationValue * 10)) - 1 && setPage(page + 1)
                                }}>
                                <PaginationLink href="#pablo" onClick={(e) => e.preventDefault()} >
                                    <i className="fas fa-angle-right" />
                                    <span className="sr-only"> Next </span>{" "}
                                </PaginationLink>
                            </PaginationItem>
                        </Pagination>
                    </nav>
                </CardFooter>
            </Card>

        </>
    )
}

export default withRouter(ListTable)

const CustomTd = ({ item, header, key }) => {
    if (header.media) {
        return (
            <td key={key} scope="col">
                <Media className="align-items-center">
                    <a
                        className="avatar rounded-circle mr-3"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                        <img
                            alt={header.key}
                            src={getProp(item, header.key) || require("../../assets/img/tempfile.png")}
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
                tditem.push(<div>{getProp(item, keyItem) || header.def_val}</div>)
            })
        }
        return (
            <td key={key} scope="col">
                {tditem}
            </td>
        )
    } else if (header.key) {
        return (
            <td key={key} scope="col">{getProp(item, header.key) || header.def_val}</td>
        )
    }

}

const getProp = (object, props) => {
    const arrprop = props.split('.')

    let prop = object
    arrprop.map(item => {
        if (prop == null) return 'не присвоено!'
        prop = prop[item]
    })
    // if(prop == 1) return '1'
    if (prop === true) return 'true'
    if (prop === false) return 'false'
    return prop
}

const Filters = ({ filters, filter, setfilter }) => {
    return (
        <div>
            {filters.data.map((item, key) => {
                return (
                    <Button
                        size={'sm'}
                        onClick={() => {
                            setfilter(key)
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

const InnerFilters = ({ filters, filter, setfilter }) => {
    return (
        <div className='inner-filters'>
            {filters.data.map((item, key) => {
                return (
                    <Button
                        size={'sm'}
                        onClick={() => {
                            setfilter(key)
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