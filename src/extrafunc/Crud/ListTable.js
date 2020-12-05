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
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

const ListTable = ({ title, headers, edit_link, add_link, id, query_key, query_fn }) => {
    const querydata = useQuery(query_key, query_fn)
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
            <Card>
                <CardHeader
                    className="d-flex justify-content-between align-items-center">
                    <CardTitle
                        tag="h5"
                        className="mb-0">
                        {title}
                    </CardTitle>
                    <Link to={add_link}>
                        <Button color={"primary"}>
                            Добавить запись
                        </Button>
                    </Link>
                </CardHeader>
                <CardBody>
                    <Table className="align-items-center table-flush" responsive>
                        <thead className="thead-light">
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
                                    <tr key={key}>
                                        {headers.map((header, key) => {
                                            return (
                                                <td key={key} scope="col">{item[header.key]}</td>
                                            )
                                        })}
                                        <td className="text-right">
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
                                                        href="#pablo"
                                                        onClick={e => e.preventDefault()}
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

export default ListTable