import React from 'react';
import Container from 'reactstrap/lib/Container';
import { Card, CardTitle, CardBody } from 'reactstrap';
import { Map } from '../../extrafunc/Map';
import { Header } from '../headers';
import { useOrdersGeo } from '../orders/query';
// import PropTypes from 'prop-types';

export default function Dashboard() {
  console.log(useOrdersGeo('on_the_way'));


  /*
  {
                    label: order.fromAddress,
                    position: order.fromCoordinates
                  },
  */
  return (
    <>
      <Header />
      <Card className="mt--7">
        <CardTitle
          tag="h5"
          className="ml-4 mt-4 mb-0">
          Карта новых заказов
          </CardTitle>
        <CardBody>
          <Map markers={useOrdersGeo('on_the_way').map(item=>{return {
            label: item.fromAddress,
            position: item.fromCoordinates
          }}) || []} />
        </CardBody>
      </Card>
    </>
  );
};

Dashboard.propTypes = {};
Dashboard.defaultProps = {};
