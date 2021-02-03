//DriversOrdersList
import React from 'react';
import { getOrders, getCount } from '../orders/query';
import ListTable from '../../extrafunc/Crud/ListTable';
import { Container, Row, Col } from 'reactstrap';
// import PropTypes from 'prop-types';

export default function DriversOrdersList({id}) {
  return (
    <Row>
      <Col>
        <ListTable
          cnt_query_fn={getCount}
          query_fn={getOrders}
          query_key={"orders"}
          title={"История Заказов"}
        //   add_link={"/admin/orders/add"}
          edit_link={"/admin/orders/update"}
          view_link={"/admin/orders/view"}
          query_filter={{where:{driverId:id}, include: [{category: ['rootCategory', 'parent']}, 'transport', 'driver', 'creator'] }}
        //   filters={{
        //     field: 'status',
        //     data: [
        //       { key: 0, name: 'Новые', value: 'new' },
        //       { key: 1, name: 'Принятые', value: 'arrived' },
        //       { key: 2, name: 'Выполняются', value: 'on_the_way' },
        //       { key: 3, name: 'Завершенные', value: 'completed' },
        //       { key: 4, name: 'Закрытые', value: 'closed' },
        //       { key: 5, name: 'Отмененные', value: 'canceled' },
        //       { key: 6, name: 'Все'},
        //     ]
        //   }}
        //   innerFilters={{
        //     field: 'type',
        //     data: [
        //       { key: 0, name: 'Все' },
        //       { key: 1, name: 'Грузоперевозки', value: 'cargo' },
        //       { key: 2, name: 'Аренда', value: 'rent' },
        //     ]
        //   }}
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
                name: "Дата и время поступления",
                key: 'createdAt',
                datentime: true,
                sort:'createdAt'
              },
              // {
              //   name: "Статус",
              //   key: 'status'
              // },
              {
                name: "Водитель",
                keys: [
                  'driver.first_name',
                  'driver.second_name',
                ],
                sort:'driverId'
              },
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
            //   {
            //     name: "Тип авто",
            //     key: 'category.rootCategory.name_ru',
            //     sort:'categoryId'
            //   },
            //   {
            //     name: "Тип кузова",
            //     key: 'category.parent.name_ru',
            //     sort:'categoryId'
            //   },
            //   {
            //     name: "Комментарий",
            //     key: 'comment'
            //   },
            //   {
            //     name: "Водитель",
            //     keys: [
            //       'driver.first_name',
            //       'driver.second_name',
            //       'driver.middle_name',
            //     ],
            //     sort:'driverId'
            //   },
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
                key: 'total_price',
                sort:'total_price'
              },
              {
                name: "Статус",
                key: 'status',
                sort:'status'
              },
            ]
          }
        />
      </Col>
    </Row>
  );
};

DriversOrdersList.propTypes = {};
DriversOrdersList.defaultProps = {};
