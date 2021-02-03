import React from 'react';
import Container from 'reactstrap/lib/Container';
import { Card, CardTitle, CardBody, Row, Col, CardFooter } from 'reactstrap';
import { Map } from '../../extrafunc/Map';
import { Header } from '../headers';
import { useOrdersGeo, useActiveOrders } from '../orders/query';
import MainCharts from './MainCharts';
import moment from 'moment'
// import PropTypes from 'prop-types';

export default function Dashboard() {
  // console.log(useOrdersGeo('on_the_way'));
  return (
    <>
      <Header />
      <Row className='mt--7'>
        <Col md='6'>
          <Card >
            <CardTitle
              tag="h2"
              className="ml-4 mt-4 mb-0">
              Карта новых заказов
              </CardTitle>
            <CardBody>
              <Map markers={
                useActiveOrders({ where: { status: 'on_the_way', createdAt: { gt: moment().subtract('day',1).format('YYYY-MM-DD') } } }).map(item => {
                  return {
                    label: item.fromAddress,
                    position: item.fromCoordinates
                  }
                }) ||
                []} />
            </CardBody>
          </Card>
        </Col>
        <Col md='6'>
          <Card >
            <CardTitle
              tag="h2"
              className="ml-4 mt-4 mb-0">
              Прибыль компании
            </CardTitle>
            <CardBody>
              <MainCharts />
            </CardBody>
            <CardFooter>

            </CardFooter>
          </Card>
        </Col>
      </Row>

    </>
  );
};

Dashboard.propTypes = {};
Dashboard.defaultProps = {};
