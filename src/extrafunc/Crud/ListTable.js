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
    Button
} from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import { useQuery, useMutation } from 'react-query';
import { delCat } from '../../features/categories/query';

const ListTable = ({ history, title, headers, edit_link, add_link, id, query_key, query_fn, query_filter, mut_delete_fn, filters }) => {


    const [filter, setfilter] = useState(0)
    let new_query_filter = query_filter


    if (filters) {
        let sort = filters.data.filter((item, key) => key == filter)[0]
        new_query_filter['where'] = {}
        new_query_filter['where'][filters.field] = sort.value
    }
    new_query_filter = JSON.stringify(new_query_filter)
    const querydata = useQuery([query_key, { filter: new_query_filter }], query_fn)
    const [delMut, delMutRes] = useMutation(mut_delete_fn, {
        onSuccess: () => {
            querydata.refetch()
        }
    })
    const [data, setData] = useState([])



    useEffect(() => {
        let cancel = false
        if (!cancel) {
            if (querydata.data) {
                setData(querydata.data)
            } else {
                setData([])
            }
            cancel = true
        }
    }, [querydata.data])

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
                    <Link to={add_link}>
                        <Button color={"primary"} size={'sm'}>
                            Добавить запись
                        </Button>
                    </Link>
                </CardHeader>
                <CardBody>
                    <Table className="align-items-center table-flush p-small" responsive>
                        <thead className="">
                            <tr>
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
                                            
                                            if (e.target.tagName === 'TD')
                                            history.push(`${edit_link}/${item[id]}`)
                                        }}>
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
                            src={getProp(item, header.key) || require("../../assets/img/theme/bootstrap.jpg")}
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