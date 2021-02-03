import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { strapi } from '../../axios';
// import PropTypes from 'prop-types';

export default function OrderMoreDetailCard({ order }) {
  const [transaction, settransaction] = useState([]);
  useEffect(() => {
    strapi.request('get', `mains/transaction/${order.id}`).then((res) => {
      settransaction(res.data)
    })
  }, [order.id])
  return (
    <Card className='orders-order-more-detail-card'>
      <CardBody>
        <h4 className='title font-weight-bold text-primary text-uppercase'>
          Подробная информация о заказе
        </h4>
        {/* <div className='d-flex justify-content-between'>
          <span className='text-muted'><small>Время на заказ</small></span>
          <span className='text-dark h5'>{order.time || 'Нет'}</span>
        </div>
        <div className='d-flex justify-content-between'>
          <span className='text-muted'><small>Крайний срок</small></span>
          <span className='text-dark h5'>{order.end || 'Нет'}</span>
        </div> */}
        <div className='d-flex justify-content-between'>
          <span className='text-muted'><small>Выбранный кузов</small></span>
          <span className='text-dark h5'>{
            order.category
            && order.category.name_ru
            || 'Нет'}</span>
        </div>
        <div className='d-flex justify-content-between'>
          <span className='text-muted'><small>Выбранный тип кузова</small></span>
          <span className='text-dark h5'>{
            order.category
            && order.category.parent
            && order.category.parent.name_ru
            || 'Нет'}</span>
        </div>
        <div className='d-flex justify-content-between'>
          <span className='text-muted'><small>Сумма заказа</small></span>
          <span className='text-dark h5'>{order.total_price || 'Нет'}</span>
        </div>
        <div className='d-flex justify-content-between mb-2'>
          <span className='text-muted'><small>Сумма резерва</small></span>
          <div className='d-flex flex-column'>
            <table>
              <thead>
                <tr>
                  <th>amount</th>
                  <th>type</th>
                  <th>status</th>
                </tr>
              </thead>
              <tbody>
                {transaction.map((item, key) => {
                  return (
                    <tr>
                      <td>{item.amount}</td>
                      <td>{item.type}</td>
                      <td>{item.status}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className='d-flex justify-content-between'>
          <span className='text-muted'><small>Процент партнера</small></span>
          <span className='text-dark h5'>{order.driver && order.driver.commission || 'Нет'}</span>
        </div>
        {/* <div className='d-flex justify-content-between'>
          <span className='text-muted'><small>Сумма для принятия</small></span>
          <span className='text-danger h5'>{order.total_price || 'Нет'}</span>
        </div> */}
        <div className='d-flex justify-content-between'>
          <span className='text-muted'><small>Доход компании</small></span>
          <span className='text-success h5'>{order.total_price || 'Нет'}</span>
        </div>
        <div className='d-flex justify-content-between'>
          <span className='text-muted'><small>Сумма партнера</small></span>
          <span className='text-success h5'>{order.total_price || 'Нет'}</span>
        </div>
      </CardBody>
    </Card>
  );
};

OrderMoreDetailCard.propTypes = {};
OrderMoreDetailCard.defaultProps = {};
