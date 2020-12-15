import React from 'react';
import Container from 'reactstrap/lib/Container';
import { Card, CardTitle, CardBody } from 'reactstrap';
import { Map } from '../../extrafunc/Map';
import { Header } from '../headers';
// import PropTypes from 'prop-types';

export default function Dashboard() {
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
          <Map markers={[]} />
        </CardBody>
      </Card>
    </>
  );
};

Dashboard.propTypes = {};
Dashboard.defaultProps = {};
