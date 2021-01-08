import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import { useQuery } from 'react-query';
import { getTransports, delTransport, getCount } from './query';
import { Link } from 'react-router-dom';
import ListTable from '../../extrafunc/Crud/ListTable';

export default function TransportsList() {
  return (
    <Row>
      <Col>
        <ListTable
          cnt_query_fn={getCount}
          mut_delete_fn={delTransport}
          query_fn={getTransports}
          query_key={"transports"}
          title={"Лист транспортов"}
          add_link={"/admin/transports/index/add"}
          edit_link={"/admin/transports/index/update"}
          query_filter={{ include: ['category', 'driver', 'make', 'model'] }}
          filters={{
            field: 'category.type',
            data: [
              { key: 0, name: 'Грузовые', value: 'cargo' },
              { key: 1, name: 'Спец. техника', value: 'rent' }
            ]
          }}
          innerFilters={{
            field: 'status',
            data: [
              { key: 0, name: 'Active', value: 'active' },
              { key: 1, name: 'Checking', value: 'checking' },
              { key: 2, name: 'Need registration', value: 'need_registration' },
              { key: 3, name: 'Canceled by moderator', value: 'canceled_by_moderator' },
              { key: 4, name: 'Deactivated', value: 'deactivated' },
            ]
          }}
          id={"id"}
          headers={
            [
              {
                name: "ID",
                key: 'id',
                sort:'id'
              },
              {
                name: "Ф.И.О. водителя",
                keys: [
                  'driver.first_name',
                  'driver.second_name',
                  'driver.middle_name',
                ],
                sort:'driverId'
              },
              {
                name: "Марка",
                keys: [
                  'make.name',
                ],
                sort: 'makeId'
              },
              {
                name: "Модель",
                keys: [
                  'model.name',
                ],
                sort: 'modelId'
              },
              {
                name: "Категория авто",
                keys: [
                  'category.name_ru',
                  'category.type'
                ],
                sort: 'modelId'
              },
              // {
              //   name: "Государственный\nномер",
              //   key: 'gos_number'
              // },
              // {
              //   name: 'Непромодерированный',
              //   key: 'need_moderation',
              //   def_val: "Прошедшие",
              //   type: {
              //     name: 'switch'
              //   }
              // },
              // {
              //   name: 'Причина отказа',
              //   key: 'moderation_message',
              //   type: {
              //     name: 'text'
              //   }
              // },
              // {
              //   name: "Transport 1",
              //   key: 'attachment.transport1.preview',
              //   media: true
              // },
              // {
              //   name: "Transport 2",
              //   key: 'attachment.transport2.preview',
              //   media: true
              // },
              // {
              //   name: "Transport 3",
              //   key: 'attachment.transport3.preview',
              //   media: true
              // },
              // {
              //   name: "Transport 4",
              //   key: 'attachment.transport4.preview',
              //   media: true
              // },
              // {
              //   name: "Transport Register 1",
              //   key: 'attachment.transport_register1.preview',
              //   media: true
              // },
              // {
              //   name: "Transport Register 2",
              //   key: 'attachment.transport_register2.preview',
              //   media: true
              // },
              // {
              //   name: "Authorization 1",
              //   key: 'attachment.authorization1.preview',
              //   media: true
              // },
              // {
              //   name: "Authorization 2",
              //   key: 'attachment.authorization2.preview',
              //   media: true
              // },
              // {
              //   name: "Мин. цена",
              //   key: 'min_price'
              // },
              // {
              //   name: "Цена за км.",
              //   key: 'one_km_price'
              // },
              // {
              //   name: "Цена за ожидание",
              //   key: 'waiting_price'
              // },
              // {
              //   name: "Цена за час",
              //   key: 'one_hour_price'
              // },
              // {
              //   name: "Мин. цена за час",
              //   key: 'min_hour_price'
              // },
              // {
              //   name: "Мин. цена за аренду",
              //   key: 'min_rent_price'
              // },
              // {
              //   name: "Мин. время",
              //   key: 'min_hour'
              // },
              {
                name: "Статус",
                key: 'status',
                sort:'status'
              },
              // {
              //   name: "Год выпуска",
              //   key: 'year'
              // },
              // {
              //   name: "Цвет",
              //   key: 'color'
              // },
              // {
              //   name: "Год выпуска",
              //   key: 'year'
              // },
              // {
              //   name: "Водитель",
              //   keys: [
              //     'driver.first_name',
              //     'driver.second_name',
              //     'driver.phone',
              //   ]
              // },
              
              
            ]
          }
        />
      </Col>
    </Row>
  )

};

TransportsList.propTypes = {};
TransportsList.defaultProps = {};
