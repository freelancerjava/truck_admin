import React from 'react';
import Container from 'reactstrap/lib/Container';
import { Card, CardTitle, CardBody } from 'reactstrap';
import { Map } from '../../extrafunc/Map';
// import PropTypes from 'prop-types';

export default function Dashboard() {
  return (
    <>
      <Container className="mt--7" fluid>
        <Card>
          <CardTitle
            tag="h5"
            className="ml-4 mt-4 mb-0">
            Карта новых заказов
          </CardTitle>
          <CardBody>
            <Map markers={[]} />
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

Dashboard.propTypes = {};
Dashboard.defaultProps = {};
