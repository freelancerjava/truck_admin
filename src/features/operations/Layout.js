import React, { useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Header } from '../headers';
// import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (
    <>
      <Container fluid className="mt--7 row-transition">
        <Row>
          <Col>
            {children}
          </Col>
        </Row>
      </Container>
    </>
  );
};

Layout.propTypes = {};
Layout.defaultProps = {};
