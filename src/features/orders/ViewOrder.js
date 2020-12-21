import React, { useState, useEffect } from 'react';
import { Row, Col, Card, CardBody, CardTitle, Button } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import Gallery from '../elements/Gallery';
import { Map } from '../../extrafunc/Map'
import UserInfoCard from './UserInfoCard';
import OrderDetailCard from './OrderDetailCard';
import OrderMoreDetailCard from './OrderMoreDetailCard';
import ViewNav from '../elements/ViewNav';
import { useQuery } from 'react-query';
import { getOrder } from './query';
// import PropTypes from 'prop-types';

export default withRouter(function ViewOrder({ history }) {
  const data = [
    { url: require('../../assets/img/carusel.png') },
    { url: require('../../assets/img/carusel.png') },
    { url: require('../../assets/img/carusel.png') },
    { url: require('../../assets/img/carusel.png') },
  ]

  const id = history.location.pathname.split('/view')[1]
  const [order, setOrder] = useState({})
  const filter = JSON.stringify({ include: ['creator'] })
  const orderData = useQuery(['order', { id: id, filter: filter }], getOrder)

  useEffect(() => {
    let cancel = false
    if (!cancel) {
      if (orderData.data) {
        setOrder(orderData.data)
      } else {
        setOrder({})
      }
      cancel = true
    }
  }, [orderData.data])

  return (
    <>
      <Row className='mb-3'>
        <Col>
          <div className='d-flex justify-content-between align-items-center'>
            <ViewNav
              title={'Новый заказ #529440'}
              parentNav={{
                url: '/admin/orders/index',
                title: 'Заказы'
              }}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={5}>
          <UserInfoCard title={''} accLink='#' accData={order.creator} />

          <OrderDetailCard />

          <OrderMoreDetailCard />
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
    </>
  );
})

