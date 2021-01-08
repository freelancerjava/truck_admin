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
          add_link={"/admin/orders/index/add"}
          edit_link={"/admin/orders/index/update"}
          view_link={"/admin/orders/index/view"}
          query_filter={{ include: [{category: ['rootCategory', 'parent']}, 'transport', 'driver', 'creator'] }}
          filters={{
            field: 'status',
            data: [
              { key: 0, name: 'Новые', value: 'new' },
              { key: 1, name: 'Принятые', value: 'arrived' },
              { key: 2, name: 'Выполняются', value: 'on_the_way' },
              { key: 3, name: 'Завершенные', value: 'completed' },
              { key: 4, name: 'Закрытые', value: 'closed' },
              { key: 5, name: 'Отмененные', value: 'canceled' },
              { key: 6, name: 'Все'},
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
              // {
              //   name: "Тип",
              //   key: 'type',
              //   sort:'type'
              // },
              {
                name: "Заказчик",
                keys: [
                  'creator.first_name',
                  'creator.second_name',
                ]
              },
              {
                name: "Дата и время поступления",
                key: 'createdAt',
                datentime: true
              },
              // {
              //   name: "Статус",
              //   key: 'status'
              // },
              {
                name: "Тип оплаты",
                key: 'payment.type',
                sort: 'payment'
              },
              {
                name: "Маршрут (От-До)",
                keys: [
                  'fromAddress',
                  'toAddress'
                ]
              },
              {
                name: "Тип авто",
                key: 'category.rootCategory.name_ru'
              },
              {
                name: "Тип кузова",
                key: 'category.parent.name_ru'
              },
              {
                name: "Комментарий",
                key: 'comment'
              },
              {
                name: "Водитель",
                keys: [
                  'driver.first_name',
                  'creator.second_name',
                  'creator.middle_name',
                ]
              },
              {
                name: "Дата и время заказа",
                time: true,
                def_val: 'Время не установлено',
                keys: [
                  'createdAt',
                  'end_date'
                ]
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
