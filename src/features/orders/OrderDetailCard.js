import React from 'react';
import { CardBody, CardTitle, Card } from 'reactstrap';
import moment from 'moment'
import StatusBadge from './StatusBadge';
// import PropTypes from 'prop-types';

export default function OrderDetailCard({ order }) {
  return (
    <Card className='mb-3'>
      <CardBody>
        <div className='d-flex justify-content-between align-items-center'>
          <h4 className='title font-weight-bold text-primary text-uppercase'>
            Данные заказа
          </h4>
          <StatusBadge status={order.status} />
        </div>
        <div className='d-flex justify-content-between mb-1'>
          <span className='text-muted'><small>Дата заказа</small></span>
          <span className='text-dark h5 mb-0'>{order.createdAt && moment(order.createdAt).format('DD.MM.YYYY') || 'Нет'}</span>
        </div>
        <div className='d-flex justify-content-between mb-1'>
          <span className='text-muted'><small>Время заказа</small></span>
          <span className='text-dark h5 mb-0'>{order.createdAt && moment(order.createdAt).format('hh:mm') || 'Нет'}</span>
        </div>
        <div className='d-flex justify-content-between mb-1'>
          <span className='text-muted'><small>{'Выбранный тип авто'}</small></span>
          <span className='text-dark h5 mb-0'>{
            order.category
            && order.category.parent
            && order.category.parent.parent
            && order.category.parent.parent.name_ru
            || 'Нет'}</span>
        </div>
        <div className='d-flex justify-content-between mb-1'>
          <span className='text-muted'><small>Дата погрузки</small></span>
          <span className='text-dark h5 mb-0'>
            {order.when === 'now'
              && (moment(order.createdAt).format('DD.MM') + ' в ' + moment(order.createdAt).format('hh:mm'))
              || order.when === 'planned'
              && (moment(order.date).format('DD.MM') + ' в ' + moment(order.date).format('hh:mm'))
              || 'Нет'}
          </span>
        </div>
        <div className='d-flex justify-content-between mb-1'>
          <span className='text-muted'><small>Метод оплаты</small></span>
          <span className='text-dark h5 mb-0'>
            {order.payment
              && (order.payment.type === 'cash'
              && 'Наличные'
              || order.payment.type === 'card'
              && 'UzCard')
              || 'Нет'}
          </span>
        </div>
        <div className='d-flex justify-content-between mb-1'>
          <span className='text-muted'><small>Разрешить догруз</small></span>
          <span className='text-danger h5 mb-0'>{order.allowAdditionalLoad ? 'Да' : 'Нет'}</span>
        </div>
        <div className='d-flex justify-content-between flex-column'>
          <span className='text-muted mb-1'><small>Комментарий</small></span>
          <span className='text-dark h5 mb-0'>
            {order.comment || 'Комментарий отсутствует'}
          </span>
        </div>
      </CardBody>
    </Card>
  );
};

OrderDetailCard.propTypes = {};
OrderDetailCard.defaultProps = {};
