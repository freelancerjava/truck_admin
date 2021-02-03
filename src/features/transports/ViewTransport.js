import React, { useState, useEffect } from 'react';
import ViewNav from '../elements/ViewNav';
import { useHistory } from 'react-router-dom';
import { useQuery, useMutation } from 'react-query';
import { delTransport, getTransport } from './query';
import UserInfoCard from '../orders/UserInfoCard';
import { Row, Col, Card, CardBody, CardTitle, Button, Carousel, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import CarouselRS from '../../extrafunc/CarouselRS';
import TransportDetailCard from './TransportDetailCard';
import TransportAttachments from './TransportAttachments';
// import PropTypes from 'prop-types';

export default function ViewTransport() {
  const history = useHistory()

  const id = history.location.pathname.split('view/')[1]
  const [transport, setTransport] = useState({})
  const filter = JSON.stringify({ include: [{ category: ['rootCategory', { parent: ['parent'] }] }, 'driver', 'model', 'make'] })
  const transportData = useQuery(['transport', { id: id, filter: filter }], getTransport)

  const [modalopen, setmodalopen] = useState(false);

  const [delMut, delMutRes] = useMutation(delTransport, {
    onSuccess: () => {
      history.goBack()
    }
  })

  useEffect(() => {
    let cancel = false
    if (!cancel) {
      if (transportData.data) {
        setTransport(transportData.data)
      } else {
        setTransport({})
      }
      cancel = true
    }
  }, [transportData.data])

  return (
    <div className="transports-view-transport">
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
              title={'Транспорт'}
              parentNav={{
                url: '/admin/transports',
                title: 'Заказы',
                action: () => {
                  history.goBack()
                }
              }}
              edit_link={`/admin/transports/update/${id}`}
              id={id}
              delMut={() => setmodalopen(true)}
            />
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <UserInfoCard title={'Владелец техники'} accLink={transport.driver ? `/admin/users/view/${transport.driver.id}` : '#'} accData={transport.driver} />

          <TransportDetailCard transport={transport} />

          {/* <OrderMoreDetailCard transport={transport} /> */}
        </Col>
        <Col xs={12} md={6}>
          <TransportAttachments transport={transport} />
        </Col>
      </Row>
    </div>
  );
};

ViewTransport.propTypes = {};
ViewTransport.defaultProps = {};
