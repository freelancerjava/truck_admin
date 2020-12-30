import React from 'react';
import { getOrders, getCount } from './query';
import ListTable from '../../extrafunc/Crud/ListTable';
import { Container, Row, Col } from 'reactstrap';
// import PropTypes from 'prop-types';

export default function OrdersList() {
  return (
    <Row>
      <Col>
        <ListTable
          cnt_query_fn={getCount}
          query_fn={getOrders}
          query_key={"orders"}
          title={"Лист Заказов"}
          add_link={"/admin/orders/index/create"}
          edit_link={"/admin/orders/index/update"}
          view_link={"/admin/orders/index/update"}
          query_filter={{ include: ['category', 'transport', 'driver', 'creator'] }}
          filters={{
            field: 'status',
            data: [
              { key: 0, name: 'Новые', value: 'new' },
              { key: 1, name: 'Принятые', value: 'arrived' },
              { key: 2, name: 'Выполняются', value: 'on_the_way' },
              { key: 3, name: 'Завершенные', value: 'completed' },
              { key: 4, name: 'Отмененные', value: 'closed' },
              { key: 5, name: 'Все'},
            ]
          }}
          innerFilters={{
            field: 'type',
            data: [
              { key: 0, name: 'Все' },
              { key: 1, name: 'Грузоперевозки', value: 'cargo' },
              { key: 2, name: 'Аренда', value: 'rent' },
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
                name: "Тип",
                key: 'type',
                sort:'type'
              },
              {
                name: "Заказчик",
                keys: [
                  'creator.first_name',
                  'creator.second_name',
                ]
              },
              {
                name: "Тип авто",
                key: 'category.name_ru'
              },
              {
                name: "Тип кузова",
                key: 'category.type'
              },
              {
                name: "Дата и время заказа",
                time: true,
                def_val: 'Время не установлено',
                keys: [
                  'start_date',
                  'end_date'
                ]
              },
              {
                name: "Маршрут",
                keys: [
                  'fromAddress',
                  'toAddress'
                ]
              },
              {
                name: "Тип оплаты",
                key: 'payment.type',
              },
              {
                name: "Сумма",
                key: 'total_price'
              },
            ]
          }
        />
      </Col>
    </Row>
  );
};

OrdersList.propTypes = {};
OrdersList.defaultProps = {};
