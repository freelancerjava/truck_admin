import React from 'react';
import { Row, Col, Card, CardBody, CardTitle } from 'reactstrap';
import Gallery from '../elements/Gallery';
import {Map} from '../../extrafunc/Map'
// import PropTypes from 'prop-types';

export default function ViewOrder() {
  const data = [
    { url: require('../../assets/img/carusel.png') },
    { url: require('../../assets/img/carusel.png') },
    { url: require('../../assets/img/carusel.png') },
    { url: require('../../assets/img/carusel.png') },
  ]
  return (
    <Row>
      <Col xs={12} md={5}>
        <Card className='mb-3'>
          <CardBody className='acc_details'>
            <div className='header'>
              <h4 className='title font-weight-bold text-primary text-uppercase'>
                Данные заказчика
              </h4>
              <div className='goto-account'>
                <a href='#'>
                  Перейти в аккаунт
                </a>
              </div>
            </div>
            <div className='body'>
              <div className='img'>
                <img src={require('../../assets/img/acc_img.png')} />
              </div>
              <div className='details'>
                <div className='name text-dark font-weight-bold'>Константин Константинопольский · ID 9541</div>
                <div className='legacy text-muted small'>Физическое лицо</div>
                <div className='contact'>
                  <div className='phone'>
                    998 97 455-59-42
                  </div>
                  <div>
                    <span className='text-info'><i className='fa fa-pen ' /> Написать</span>
                    <span className='text-success ml-2'><i className='fa fa-phone ' /> Позвонить</span>
                  </div>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className='mb-3'>
          <CardBody>
            <CardTitle tag='h5' className='text-primary mb-1'>
              Данные заказа
            </CardTitle>
            <div className='d-flex justify-content-between'>
              <span className='text-muted'><small>Дата заказа</small></span>
              <span className='text-dark h5'>30.11.2020</span>
            </div>
            <div className='d-flex justify-content-between'>
              <span className='text-muted'><small>Время заказа</small></span>
              <span className='text-dark h5'>21:01</span>
            </div>
            <div className='d-flex justify-content-between'>
              <span className='text-muted'><small>Выбранный тип авто</small></span>
              <span className='text-dark h5'>от 1 кг до 1 т</span>
            </div>
            <div className='d-flex justify-content-between'>
              <span className='text-muted'><small>Дата погрузки</small></span>
              <span className='text-dark h5'>25.08 в 12:42</span>
            </div>
            <div className='d-flex justify-content-between'>
              <span className='text-muted'><small>Метод оплаты</small></span>
              <span className='text-dark h5'>UzCard</span>
            </div>
            <div className='d-flex justify-content-between'>
              <span className='text-muted'><small>Разрешить догруз</small></span>
              <span className='text-danger h5'>Нет</span>
            </div>
            <div className='d-flex justify-content-between flex-column'>
              <span className='text-muted'><small>Комментарий</small></span>
              <span className='text-dark h5'>
                Нужно перевезти бытовую технику:
                стиральную машину и газовую плиту
                в пределах Ташкента
              </span>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <CardTitle tag='h5' className='text-primary mb-1'>
              Подробная информация о заказе
            </CardTitle>
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
      </Col>
      <Col xs={12} md={7}>
        <Card className='mb-3'>
          <CardBody>
            <h4 className='title font-weight-bold text-primary text-uppercase'>
              Фото заказа
            </h4>
            <div>
              <Gallery>
                {data.map((item, key) => {
                  return (
                    <div key={key} className="carusel-section-products-carousel">
                      <img src={item.url} alt="product" />
                    </div>
                  )
                })}
              </Gallery>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <h4 className='title font-weight-bold text-primary text-uppercase'>
              Маршрут
            </h4>
            <div>
              <Map height={340} markers={[]} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

ViewOrder.propTypes = {};
ViewOrder.defaultProps = {};
