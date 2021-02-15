import React from 'react';
import ListTable from '../../extrafunc/Crud/ListTable';
import { Container, Row, Col } from 'reactstrap';
import { getOrders, getCount } from '../orders/query';
import { getUsers } from './query';
// import PropTypes from 'prop-types';

export default function ChatsList() {
  return (
    <Row>
      <Col>
        <ListTable
          cnt_query_fn={getCount}
          query_fn={getUsers}
          query_key={"chatusers"}
          title={"Список чатов пользователей"}
          // add_link={"/admin/chats/add"}
          // edit_link={"/admin/chats/update"}
          view_link={"/admin/chats/view"}
          query_filter={{ include: [{category: ['rootCategory', 'parent']}, 'transport', 'driver', 'creator'] }}
          // filters={{
          //   field: 'status',
          //   data: [
          //     { key: 0, name: 'Новые', value: 'new' },
          //     { key: 1, name: 'Принятые', value: 'arrived' },
          //     { key: 2, name: 'Выполняются', value: 'on_the_way' },
          //     { key: 3, name: 'Завершенные', value: 'completed' },
          //     { key: 4, name: 'Закрытые', value: 'closed' },
          //     { key: 5, name: 'Отмененные', value: 'canceled' },
          //     { key: 6, name: 'Все'},
          //   ]
          // }}
          // innerFilters={{
          //   field: 'type',
          //   data: [
          //     { key: 0, name: 'Все' },
          //     { key: 1, name: 'Грузоперевозки', value: 'cargo' },
          //     { key: 2, name: 'Аренда', value: 'rent' },
          //   ]
          // }}
          id={"id"}
          headers={
            [
              {
                name: "ID",
                key: 'id',
                sort:'id'
              },
              {
                name: "Ф.И.О исполнителя",
                keys: [
                  'first_name',
                  'second_name',
                ],
                sort:'creatorId'
              },
              // {
              //   name: "Ф.И.О исполнителя",
              //   keys: [
              //     'driver.first_name',
              //     'driver.second_name',
              //   ],
              //   sort:'driverId'
              // },
              {
                name: "Сообщение",
                key: 'message.text',
              },
              {
                name: "Дата начала переписки",
                key: 'createdAt',
                datentime: true,
                sort:'createdAt'
              },
              {
                name: "Дата последнего сообщения",
                key: 'createdAt',
                datentime: true,
                sort:'createdAt'
              },
              {
                name: "Статус обсуждаемого заказа",
                key: 'status'
              },
            ]
          }
        />
      </Col>
    </Row>
  );
};

ChatsList.propTypes = {};
ChatsList.defaultProps = {};
