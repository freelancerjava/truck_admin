import React, { useState, useEffect } from 'react';
import {
  Table,
  Media,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody
} from 'reactstrap';
import { useQuery } from 'react-query';
import { getCats } from './query';
import { Link } from 'react-router-dom';
import ListTable from '../../extrafunc/Crud/ListTable';
// import PropTypes from 'prop-types';

export default function CategoryList() {


  return (
    <Container className="mt--7" fluid>
      <Row>
        <Col>
          <ListTable
            query_fn={getCats}
            query_key={"cats"}
            title={"Лист категорий"}
            add_link={"/admin/categories/index/add"}
            edit_link={"/admin/categories/index/update"}
            id={"id"}
            headers={
              [
                {
                  name: "ID",
                  key: 'id'
                },
                {
                  name: "Наименование",
                  key: 'name'
                },
                {
                  name: "Тип",
                  key: 'type'
                },
                {
                  name: "Описание",
                  key: 'description'
                },
                {
                  name: "min_distance",
                  key: 'min_distance'
                },
                {
                  name: "min_waiting",
                  key: 'min_waiting'
                },
                {
                  name: "position",
                  key: 'position'
                }
              ]
            }
          />
        </Col>
      </Row>
    </Container>
  );
};

CategoryList.propTypes = {};
CategoryList.defaultProps = {};


/*
<Card>
            <CardTitle
              tag="h5"
              className="ml-4 mt-4 mb-0">
              Лист категорий
            </CardTitle>
            <CardBody>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Наименование</th>
                    <th scope="col">Тип</th>
                    <th scope="col">Описание</th>
                    <th scope="col">min_distance</th>
                    <th scope="col">min_waiting</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {cats && cats.map((item, key) => {
                    return (
                      <tr>
                        <td>{item.id}</td>
                        <th scope="row">
                          {item.icon ||
                            <Media className="align-items-center">
                              <a
                                className="avatar rounded-circle mr-3"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <img
                                  alt="..."
                                  src={require("../../assets/img/theme/bootstrap.jpg")}
                                />
                              </a>
                              <Media>
                                <span className="mb-0 text-sm">
                                  {item.name}
                                </span>
                              </Media>
                            </Media>
                          }
                        </th>
                        <td>{item.type}</td>
                        <td>
                          {item.description}
                        </td>
                        <td>
                          {item.min_distance}
                        </td>
                        <td>
                          {item.min_waiting}
                        </td>
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
                                to={`/admin/categories/index/${item.id}`}>
                                <DropdownItem
                                  href="#pablo"
                                >Изменить</DropdownItem>
                              </Link>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Another action
                            </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                Something else here
                            </DropdownItem>
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

*/