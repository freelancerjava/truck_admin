import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import { useQuery } from 'react-query';
import { getTransports } from './query';
import { Link } from 'react-router-dom';
import ListTable from '../../extrafunc/Crud/ListTable';

export default function TransportsList() {
  return (
    <Container className="mt--7" fluid>
      <Row>
        <Col>
          <ListTable
            delete_fn={null}
            query_fn={getTransports}
            query_key={"transports"}
            title={"Лист транспортов"}
            add_link={"/admin/transports/index/add"}
            edit_link={"/admin/transports/index/update"}
            query_filter={{ include: ['category', 'driver', 'make', 'model'] }}
            id={"id"}
            headers={
              [
                {
                  name: "ID",
                  key: 'id'
                },
                {
                  name: "Государственный\nномер",
                  key: 'gos_number'
                },
                {
                  name: "Мин. цена",
                  key: 'min_price'
                },
                {
                  name: "Цена за км.",
                  key: 'one_km_price'
                },
                {
                  name: "Цена за ожидание",
                  key: 'waiting_price'
                },
                {
                  name: "Цена за час",
                  key: 'one_hour_price'
                },
                {
                  name: "Мин. цена за час",
                  key: 'min_hour_price'
                },
                {
                  name: "Мин. цена за аренду",
                  key: 'min_rent_price'
                },
                {
                  name: "Мин. время",
                  key: 'min_hour'
                },
                {
                  name: "Статус",
                  key: 'status'
                },
                {
                  name: "Год выпуска",
                  key: 'year'
                },
                {
                  name: "Цвет",
                  key: 'color'
                },
                {
                  name: "Год выпуска",
                  key: 'year'
                },
                {
                  name: "Водитель",
                  keys: [
                    'driver.first_name',
                    'driver.second_name',
                    'driver.phone',
                  ]
                },
                {
                  name: "Категория",
                  keys: [
                    'category.name_ru',
                    'category.type'
                  ]
                },
                {
                  name: "Производитель",
                  keys: [
                    'make.name',
                  ]
                },
                {
                  name: "Модель",
                  keys: [
                    'model.name',
                  ]
                },
              ]
            }
          />
        </Col>
      </Row>
    </Container>
  )

};

TransportsList.propTypes = {};
TransportsList.defaultProps = {};
