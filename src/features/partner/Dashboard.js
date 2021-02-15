import React, { useEffect, useState } from 'react';
import Container from 'reactstrap/lib/Container';
import { Card, CardTitle, CardBody, Row, Col, CardFooter, CardHeader } from 'reactstrap';
import { Map } from '../../extrafunc/Map';
import { Header } from '../headers';
import { useOrdersGeo, useActiveOrders } from '../orders/query';
import MainCharts from './MainCharts';
import moment from 'moment'
import { useQuery } from 'react-query';
import { getStatistic } from './query';
// import PropTypes from 'prop-types';
import truck from './truck.png'

export default function Dashboard() {
  // console.log(useOrdersGeo('on_the_way'));
  const statistic_data = useQuery(['statistic'], getStatistic)
  const [statistic, setstatistic] = useState({});
  console.log(statistic_data);
  
  useEffect(() => {
    if (statistic_data.data) setstatistic(statistic_data.data)
    else setstatistic({})
  }, [statistic_data.data])
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
                useActiveOrders({ where: { status: 'accepted', createdAt: { gt: moment().subtract('day', 1).format('YYYY-MM-DD') } } }).map(item => {
                  return {
                    label: item.fromAddress,
                    position: item.fromCoordinates,
                    icon: truck,
                    iconDeg: 25
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

          <Row className='mt-3'>
            <Col>
              <Card>
                <CardBody>
                  <div className='text-dark h5'>Общее кол-во водителей</div>
                  <span className='text-dark h1 fz-56'>{statistic.allUser || '0'}</span>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardBody>
                  <div className='text-dark h5'>Водители на линии</div>
                  <span className='text-dark h1 fz-56'>{statistic.onlineUsers || '0'}</span>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardBody>
                  <div className='text-dark h5'>Выполненное кол-во заказов</div>
                  <span className='text-dark h1 fz-56'>{statistic.closedOrder || '0'}</span>
                </CardBody>
              </Card>
            </Col>
          </Row>

        </Col>
      </Row>

    </>
  );
};

Dashboard.propTypes = {};
Dashboard.defaultProps = {};
