import React, { useEffect } from 'react';
import { Card, Col, Container, Row } from 'reactstrap';
// import PropTypes from 'prop-types';
import Header from '../headers/Header'
import LogForm from './LogForm';

export default function LogItem() {
  return (
    <>
      <Header />
      <div className="logs-log-item">
        <Container fluid>
          <Row>
            <Col className="p-3" >
              <LogForm />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

LogItem.propTypes = {};
LogItem.defaultProps = {};
