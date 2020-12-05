import React from 'react';
import { CardTitle, CardBody, Container, Row, Col, Card, CardHeader } from 'reactstrap';
// import PropTypes from 'prop-types';

export default function NewCategory() {
  return (
    <Container className="mt--7" fluid>
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <CardTitle tag='h5' className='mb-0'>
                Создание
              </CardTitle>
            </CardHeader>

            <CardBody>

            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

NewCategory.propTypes = {};
NewCategory.defaultProps = {};
