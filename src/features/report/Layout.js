import React, { useState, useEffect } from 'react';
// reactstrap components
import {
  Col,
  Container,
  Row
} from "reactstrap";
import ReportForm from './ReportForm';
import { Header } from '../headers';

export default function Layout() {
  const ltu = localStorage.getItem('user');
  const [user, setuser] = useState(JSON.parse(ltu) || {})

  return <>
    <Container className="mt--7 row-transition" fluid>
      <Row>
        <Col>
          <ReportForm user={user} />
        </Col>
      </Row>
    </Container>
  </>
};

Layout.propTypes = {};
Layout.defaultProps = {};
