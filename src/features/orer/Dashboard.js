import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Card, CardBody, CardFooter, CardHeader, Col, Container, Row } from 'reactstrap';
import moment from 'moment';
import MapBrowser from '../map/MapBrowser';
import ReportsList from '../report/ReportList';
import { getAllLogsByGq } from './query';
// import PropTypes from 'prop-types';

export default function Dashboard() {
  const ltu = localStorage.getItem('user');
  const [user, setuser] = useState(JSON.parse(ltu) || {})
  const [logs, setlogs] = useState([])

  const logdata = useQuery(["logs", { date: moment().format("YYYY-MM-DD"), id: user.command.id }], getAllLogsByGq)
  console.log(logdata);

  useEffect(() => {
    if (logdata.data && logdata.data.logs != null) {
      setlogs(logdata.data.logs)
    } else {
      setlogs([])
    }
  }, [logdata.data]);
  return (
    <Container className="mt--7 row-transition" fluid>
      <Row>
        <Col>
          <ReportsList />
        </Col>
      </Row>
      <hr/>
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <h3>Проводимые мероприятия</h3>
            </CardHeader>
            <CardBody>
              <MapBrowser data={logs} />
            </CardBody>
          </Card>
        </Col>
      </Row>
      
    </Container>
  );
};

Dashboard.propTypes = {};
Dashboard.defaultProps = {};
