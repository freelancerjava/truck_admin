import React from 'react';
import { getOrders, getCount } from './query';
import ListTable from '../../extrafunc/Crud/ListTable';
import { Container, Row, Col } from 'reactstrap';
// import PropTypes from 'prop-types'; 
//288
//130
//418

export default function OrdersList() {
  return (
    <div className='orders-orders-list'>
      <Row>
        <Col>
          <ListTable
            cnt_query_fn={getCount}
            query_fn={getOrders}
            query_key={"orders"}
            title={"Лист Заказов"}
            add_link={"/admin/orders/create"}
            edit_link={"/admin/orders/edit"}
            view_link={"/admin/orders/view"}
            query_filter={{ include: [{ category: ['rootCategory', 'parent'] }, 'transport', 'driver', 'creator'] }}
            filters={{
              field: 'status',
              data: [
                { key: 0, name: 'Новые', value: 'new', class: 'new-order' },
                { key: 10, name: 'Arriving', value: 'arriving', class: 'new-order' },
                { key: 110, name: 'Arrived', value: 'arrived', class: 'new-order' },
                { key: 1, name: 'Принятые', value: 'accepted', class: 'accepted-order' },
                { key: 2, name: 'Выполняются', value: 'on_the_way', class: 'on_the_way-order' },
                { key: 12, name: 'Paused', value: 'paused', class: 'on_the_way-order' },
                { key: 12, name: 'Delivered', value: 'delivered', class: 'on_the_way-order' },
                { key: 3, name: 'Завершенные', value: 'completed', class: 'completed-order' },
                { key: 4, name: 'Закрытые', value: 'closed', class: 'closed-order' },
                { key: 5, name: 'Отмененные', value: 'cancel', class: 'canceled-order' },
                { key: 6, name: 'Все' },
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
                  sort: 'id'
                },
                {
                  name: "Тип",
                  key: 'type',
                  sort: 'type'
                },

                {
                  name: "Status",
                  key: 'status',
                  sort: 'status'
                },                {
                  name: "Заказчик",
                  keys: [
                    'creator.first_name',
                    'creator.second_name',
                  ],
                  sort: 'creatorId'
                },
                {
                  name: "Тип авто",
                  key: 'category.rootCategory.name_ru',
                  sort: 'categoryId'
                },
                {
                  name: "Тип кузова",
                  key: 'category.parent.name_ru',
                  sort: 'categoryId'
                },
                {
                  name: "Маршрут (От-До)",
                  keys: [
                    'fromAddress',
                    'toAddress'
                  ]
                },
                {
                  name: "Дата и время",
                  key: 'createdAt',
                  datentime: true,
                  sort: 'createdAt'
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


                // {
                //   name: "Комментарий",
                //   key: 'comment'
                // },
                // {
                //   name: "Водитель",
                //   keys: [
                //     'driver.first_name',
                //     'driver.second_name',
                //     'driver.middle_name',
                //   ],
                //   sort:'driverId'
                // },

                {
                  name: "Сумма",
                  key: 'total_price',
                  sort: 'total_price'
                },
              ]
            }
          />
        </Col>
      </Row>
    </div>
  );
};

OrdersList.propTypes = {};
OrdersList.defaultProps = {};
