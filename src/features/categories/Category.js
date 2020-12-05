import React from 'react';
import { CardTitle, CardBody, Container, Row, Col, Card, CardHeader } from 'reactstrap';
import EditForm from '../../extrafunc/Crud/EditForm';
import { getCat } from './query';
// import PropTypes from 'prop-types';

export default function Category() {
  return (
    <Container className="mt--7" fluid>
      <Row>
        <Col>
          <EditForm
            query_fn={getCat}
            query_key={'cat'}
          />
        </Col>
      </Row>
    </Container>
  );
};

Category.propTypes = {};
Category.defaultProps = {};
