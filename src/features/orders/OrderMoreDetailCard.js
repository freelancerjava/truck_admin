import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
// import PropTypes from 'prop-types';

export default function OrderMoreDetailCard() {
  return (
    <Card>
      <CardBody>
        <h4 className='title font-weight-bold text-primary text-uppercase'>
          Подробная информация о заказе
        </h4>
        <div className='d-flex justify-content-between'>
          <span className='text-muted'><small>Время на заказ</small></span>
          <span className='text-dark h5'>24 часа</span>
        </div>
        <div className='d-flex justify-content-between'>
          <span className='text-muted'><small>Крайний срок</small></span>
          <span className='text-dark h5'>31.11.2020</span>
        </div>
        <div className='d-flex justify-content-between'>
          <span className='text-muted'><small>Выбранный кузов</small></span>
          <span className='text-dark h5'>Пикап</span>
        </div>
        <div className='d-flex justify-content-between'>
          <span className='text-muted'><small>Выбранный тип кузова</small></span>
          <span className='text-dark h5'>Открытый</span>
        </div>
        <div className='d-flex justify-content-between'>
          <span className='text-muted'><small>Сумма заказа</small></span>
          <span className='text-dark h5'>1 250 000 сум</span>
        </div>
        <div className='d-flex justify-content-between'>
          <span className='text-muted'><small>Сумма резерва</small></span>
          <span className='text-danger h5'>250 000 сум</span>
        </div>
        <div className='d-flex justify-content-between'>
          <span className='text-muted'><small>Процент партнера</small></span>
          <span className='text-dark h5'>5%</span>
        </div>
        <div className='d-flex justify-content-between'>
          <span className='text-muted'><small>Сумма для принятия</small></span>
          <span className='text-danger h5'>125 000 сум</span>
        </div>
        <div className='d-flex justify-content-between'>
          <span className='text-muted'><small>Доход компании</small></span>
          <span className='text-success h5'>320 000 сум</span>
        </div>
        <div className='d-flex justify-content-between'>
          <span className='text-muted'><small>Сумма партнера</small></span>
          <span className='text-success h5'>100 000 сум</span>
        </div>
      </CardBody>
    </Card>
  );
};

OrderMoreDetailCard.propTypes = {};
OrderMoreDetailCard.defaultProps = {};
