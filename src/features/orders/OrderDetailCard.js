import React from 'react';
import { CardBody, CardTitle, Card } from 'reactstrap';
// import PropTypes from 'prop-types';

export default function OrderDetailCard() {
  return (
    <Card className='mb-3'>
      <CardBody>
        <h4 className='title font-weight-bold text-primary text-uppercase'>
          Данные заказа
        </h4>
        <div className='d-flex justify-content-between mb-1'>
          <span className='text-muted'><small>Дата заказа</small></span>
          <span className='text-dark h5'>30.11.2020</span>
        </div>
        <div className='d-flex justify-content-between mb-1'>
          <span className='text-muted'><small>Время заказа</small></span>
          <span className='text-dark h5'>21:01</span>
        </div>
        <div className='d-flex justify-content-between mb-1'>
          <span className='text-muted'><small>Выбранный тип авто</small></span>
          <span className='text-dark h5'>от 1 кг до 1 т</span>
        </div>
        <div className='d-flex justify-content-between mb-1'>
          <span className='text-muted'><small>Дата погрузки</small></span>
          <span className='text-dark h5'>25.08 в 12:42</span>
        </div>
        <div className='d-flex justify-content-between mb-1'>
          <span className='text-muted'><small>Метод оплаты</small></span>
          <span className='text-dark h5'>UzCard</span>
        </div>
        <div className='d-flex justify-content-between mb-1'>
          <span className='text-muted'><small>Разрешить догруз</small></span>
          <span className='text-danger h5'>Нет</span>
        </div>
        <div className='d-flex justify-content-between flex-column'>
          <span className='text-muted mb-1'><small>Комментарий</small></span>
          <span className='text-dark h5'>
            Нужно перевезти бытовую технику:
            стиральную машину и газовую плиту
            в пределах Ташкента
              </span>
        </div>
      </CardBody>
    </Card>
  );
};

OrderDetailCard.propTypes = {};
OrderDetailCard.defaultProps = {};
