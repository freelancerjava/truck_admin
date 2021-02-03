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
import { Rate } from 'antd';
import { DollarSVG, SuccessSVG, PercentSVG, OrderLogoSVG, TimeSVG } from '../../assets/svg/main_svg';
import moment from 'moment'
// import PropTypes from 'prop-types';

export default withRouter(function ViewOrder({ history }) {

  const id = history.location.pathname.split('view/')[1]
  const [order, setOrder] = useState({})
  const filter = JSON.stringify({ include: [{ category: ['rootCategory', { parent: ['parent'] }] }, 'creator', 'driver', 'transport'] })
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
              title={`Заказ #${order.id}`}
              parentNav={{
                url: '/admin/orders',
                title: 'Заказы',
                action: () => {
                  history.goBack()
                }
              }}
              edit_link={`/admin/orders/edit/${id}`}
              id={id}
              delMut={() => setmodalopen(true)}
            />
          </div>
        </Col>
      </Row>
      <Row className='mb-3'>
        <Col xs={12} md={6}>
          <UserInfoCard title={''} accLink={order.creator ? `/admin/users/view/${order.creator.id}` : '#'} accData={order.creator} />

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
                {order.attachments && order.attachments.length > 0 ? <CarouselRS data={order && order.attachments} show_type={true} />
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
                <Map height={340} markers={
                  order.fromCoordinates && order.toCoordinates && [
                    {
                      label: order.fromAddress,
                      position: order.fromCoordinates,
                      icon: require('../../assets/img/Apin.png')
                    },
                    {
                      label: order.toAddress,
                      position: order.toCoordinates,
                      icon: require('../../assets/img/Bpin.png')
                    }
                  ] ||
                  []} />
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          {order.driver && <DriverCard
            accLink={`/admin/users/view/${order.driver.id}`}
            accData={order.driver}
            rating={order.rating}
            title='Исполнитель' />}
        </Col>
        <Col>
          {order.transport && <TransportCard
            transportData={{ ...order.transport, category: order.category }}
            transportLink={`/admin/transports/view/${order.driver.id}`}
            title={'Авто исполнителя'} />}
        </Col>
      </Row>
    </>
  );
})

const DriverCard = ({ accData = {}, title, accLink, rating }) => {
  return (
    <Card className='mb-3'>
      <CardBody className='acc_details'>
        <div className='header'>
          <h4 className='title font-weight-bold text-primary text-uppercase'>
            {title || 'Данные исполнителя'}
          </h4>
          <div className='goto-account'>
            <Link to={accLink}>Перейти в аккаунт</Link>
          </div>
        </div>
        <div className='body'>
          <div className='img'>
            <img src={accData && accData.attachments
              && accData.attachments.main
              && accData.attachments.main.result
              || require('../../assets/img/acc_img.png')} />
          </div>
          <div className='details'>
            <div className='name text-dark font-weight-bold'>
              {accData && accData.first_name || 'Константин'}
              {accData && accData.second_name || 'Константинопольский'}
              {` · ID ${accData.id || '9541'}`}
            </div>
            <div className='legacy text-muted small'>{accData.phone}</div>
            <div className='contact'>
              <div className='phone'>
                {rating && <Rate disabled allowHalf defaultValue={Math.ceil(rating)} />} {rating}
              </div>
              <div className='d-flex'>
                <span className='text-info'><i className='fa fa-pen ' /> Написать</span>
                <span className='text-success ml-2'><i className='fa fa-phone ' /> Позвонить</span>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

const TransportCard = ({ transportData = {}, title, transportLink, rating }) => {
  return (
    <Card className='mb-3'>
      <CardBody className='acc_details'>
        <div className='header'>
          <h4 className='title font-weight-bold text-primary text-uppercase'>
            {title || 'Данные техники'}
          </h4>
          <div className='goto-account'>
            <Link to={transportLink}>Перейти к технике</Link>
          </div>
        </div>
        <div className='body'>
          <div className='img'>
            <img src={transportData && transportData.attachment
              && transportData.attachment.transport1
              && transportData.attachment.transport1.result
              || require('../../assets/img/tempfile.png')} />
          </div>
          <div className='details'>
            <div className='name text-dark font-weight-bold'>
              {transportData && transportData.name || 'Наименование техники'}
            </div>
            <Row>
              <Col>
                <div className='d-flex justify-content-between'>
                  <span className='text-muted'><small>Гос. номер</small></span>
                  <span className='text-dark h5'>{transportData.gos_number || 'Нет'}</span>
                </div>
                <div className='d-flex justify-content-between'>
                  <span className='text-muted'><small>Категория</small></span>
                  <span className='text-dark h5'>{transportData.category.name_ru || 'Нет'}</span>
                </div>
              </Col>
              <Col>
                <div className='d-flex justify-content-between'>
                  <span className='text-muted'><small>Тип кузова</small></span>
                  <span className='text-dark h5'>{transportData.category.parent.name_ru || 'Нет'}</span>
                </div>
                <div className='d-flex justify-content-between'>
                  <span className='text-muted'><small>Объём</small></span>
                  <span className='text-dark h5'>{transportData.commission || 'Нет'}</span>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

const StatisticCard = ({ title, amount, Icon }) => {
  return (
      <Card>
          <CardBody className='p-3 d-flex justify-content-between align-items-center'>
              <div>
                  <h4 className='title font-weight-bold text-primary text-uppercase'>
                      {title || 'Заработано'}
                  </h4>
                  <span className='text-dark h1'>{amount || '15 245 000'}</span>
              </div>
              <span className='text-dark h5'><Icon /></span>

          </CardBody>
      </Card>
  )
}

const Statistic = () => {
  return (<>
      <Row className='pl-3'>
          <h3>Статистические данные</h3>
      </Row>
      <Row className='mb-3'>
          <Col>
              <StatisticCard Icon={DollarSVG} title={'Итоговая сумма'} amount={null} />
          </Col>
          <Col>
              <StatisticCard Icon={SuccessSVG} title={'Сумма водителю'} amount={null} />
          </Col>
          <Col>
              <StatisticCard Icon={PercentSVG} title={'Процент партнера'} amount={'15%'} />
          </Col>
      </Row>
      <Row>
          <Col>
              <StatisticCard Icon={OrderLogoSVG} title={'Заработок OrderTruck'} amount={null} />
          </Col>
          <Col>
              <StatisticCard Icon={TimeSVG} title={'Дата и время оплаты исполнителем'} amount={moment().format('DD.MM.YYYY в hh:mm:ss')} />
          </Col>
      </Row>
  </>)
}
