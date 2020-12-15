import React from 'react';
import { getOrders } from './query';
import ListTable from '../../extrafunc/Crud/ListTable';
import { Container, Row, Col } from 'reactstrap';
// import PropTypes from 'prop-types';

export default function OrdersList() {
  return (
      <Row>
        <Col>
          <ListTable
            query_fn={getOrders}
            query_key={"orders"}
            title={"Лист Заказов"}
            add_link={"/admin/orders/index/add"}
            edit_link={"/admin/orders/index/update"}
            view_link={"/admin/orders/index/view"}
            query_filter={{ include: ['category', 'transport', 'driver', 'creator'] }}
            filters={{
              field: 'status',
              data: [
                { key: 0, name: 'Новые', value: 'new' },
                { key: 1, name: 'Принятые', value: 'arrived' },
                { key: 2, name: 'Выполняются', value: 'on_the_way' },
                { key: 3, name: 'Завершенные', value: 'completed' },
                { key: 4, name: 'Отмененные', value: 'closed' },
              ]
            }}
            id={"id"}
            headers={
              [
                {
                  name: "ID",
                  key: 'id'
                },
                {
                  name: "Тип",
                  key: 'type'
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
                  key: 'transport.gos_num'
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
                  key: 'payment.type'
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
