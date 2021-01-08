import React, { useState, useEffect } from 'react';
import { Row, Col, Card, CardBody, CardTitle, Button, Carousel, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';
import Gallery from '../elements/Gallery';
import { Map } from '../../extrafunc/Map'
import UserInfoCard from './UserInfoCard';
import OrderDetailCard from './OrderDetailCard';
import OrderMoreDetailCard from './OrderMoreDetailCard';
import ViewNav from '../elements/ViewNav';
import { useQuery, useMutation } from 'react-query';
import { getOrder, delOrder } from './query';
import CarouselRS from '../../extrafunc/CarouselRS';
// import PropTypes from 'prop-types';

export default withRouter(function ViewOrder({ history }) {
  const data = [
    { url: require('../../assets/img/carusel.png') },
    { url: require('../../assets/img/carusel.png') },
    { url: require('../../assets/img/carusel.png') },
    { url: require('../../assets/img/carusel.png') },
  ]

  const id = history.location.pathname.split('view/')[1]
  const [order, setOrder] = useState({})
  const filter = JSON.stringify({ include: [{ category: ['rootCategory', { parent: ['parent'] }] }, 'creator'] })
  const orderData = useQuery(['order', { id: id, filter: filter }], getOrder)

  const [modalopen, setmodalopen] = useState(false);

  const [delMut, delMutRes] = useMutation(delOrder, {
    onSuccess: () => {
      history.goBack()
    }
  })

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
      <Modal isOpen={modalopen}>
        <ModalHeader>Удаление элемента</ModalHeader>
        <ModalBody>Хотите удалить элемент?</ModalBody>
        <ModalFooter>
          <div>
            <Button onClick={() => {
              delMut({ id: id })
            }} color='danger' size='sm'>Да</Button>
            <Button onClick={() => {
              setmodalopen(false)
            }} color='white' size='sm'>Нет</Button>
          </div>
        </ModalFooter>
      </Modal>
      <Row className='mb-3'>
        <Col>
          <div className='d-flex justify-content-between align-items-center'>
            <ViewNav
              title={'Новый заказ #529440'}
              parentNav={{
                url: '/admin/orders/index',
                title: 'Заказы',
                action: () => {
                  history.goBack()
                }
              }}
              edit_link={`/admin/orders/index/update/${id}`}
              id={id}
              delMut={() => setmodalopen(true)}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <UserInfoCard title={''} accLink={order.creator ? `/admin/users/index/update/${order.creator.id}` : '#'} accData={order.creator} />

          <OrderDetailCard order={order} />

          <OrderMoreDetailCard order={order} />
        </Col>
        <Col xs={12} md={6}>
          <Card className='mb-3'>
            <CardBody>
              <h4 className='title font-weight-bold text-primary text-uppercase'>
                Фото заказа
            </h4>
              <div className='attachments'>
                {/* {order.attachments && order.attachments.length > 0 ? <Gallery>
                  {order.attachments.map((item, key) => {
                    return (
                      <div key={key} className="carusel-section-products-carousel">
                        <img src={item.data && item.data.result || item.url || data[0].url} alt="product" />
                      </div>
                    )
                  })}
                </Gallery>
                  : <div>
                    <img src={require('../../assets/img/tempfile.png')} />
                  </div>} */}
                {order.attachments && order.attachments.length > 0 ? <CarouselRS data={order && order.attachments} />
                  : <div>
                    <img src={require('../../assets/img/tempfile.png')} />
                  </div>}
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody>
              <h4 className='title font-weight-bold text-primary text-uppercase'>
                Маршрут
            </h4>
              <div>
                <Map height={340} markers={[
                  {
                    label: order.fromAddress,
                    position: order.fromCoordinates
                  },
                  {
                    label: order.toAddress,
                    position: order.toCoordinates
                  }
                ]} />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
})

