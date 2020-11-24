import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { Link } from 'react-router-dom'
import { Button, Card, CardHeader, Col, Container, Modal, ModalBody, ModalFooter, ModalHeader, Progress, Row, Table } from 'reactstrap';
import Header from '../../../components/Headers/Header';
import { getLogsByGq } from '../../../query/logs';
import LogForm from './LogForm';
import { LogRow } from './LogRow';
import LogRowHead from './LogRowHead';
import './style.less'
import moment from 'moment'

const Logs = () => {

  const ltu = localStorage.getItem('user');
  const [user, setuser] = useState(JSON.parse(ltu) || {})
  const [logs, setlogs] = useState([])
  const [editingLogId, seteditingLogId] = useState(null)

  const logdata = useQuery(["logs", { date: moment().format("YYYY-MM-DD"), id: user.command.id }], getLogsByGq)
  // console.log(logdata);

  useEffect(() => {
    if (logdata.data && logdata.data.logs != null) {
      setlogs(logdata.data.logs)
    } else {
      setlogs([])
    }
  }, [logdata.data]);



  const [newLogModalOpen, setnewLogModalOpen] = useState(false)
  const [newLog, setnewLog] = useState(true)

  const newLogToggle = (index) => {
    seteditingLogId(index)
    setnewLogModalOpen(!newLogModalOpen)
  }

  return <>

    <Header />
    <Container className="mt--7" fluid>
      <Row>
        <Col>
          <Card className="shadow">
            <CardHeader className="border-0">
              <Row className="align-items-center">
                <div className="col">
                  <h3 className="mb-0">Суточные отчеты</h3>
                </div>
                <div className="col text-right">
                  <Button
                    color="primary"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="sm"
                  >Посмотреть все</Button>

                  <Button
                    color="info"
                    href="#pablo"
                    onClick={e => { e.preventDefault(); setnewLogModalOpen(true); seteditingLogId(null) }}
                    size="sm"
                  >Добавить</Button>
                </div>
              </Row>
            </CardHeader>

            <div className="scrolling-div">
              <Table className="align-items-center table-flush " responsive>
                <LogRowHead />
                <tbody>
                  {logs && logs.map((item, index) => {
                    return <LogRow onClick={() => { newLogToggle(index) }} item={item} index={index} />
                  })}
                </tbody>
              </Table>
            </div>

            <Modal isOpen={newLogModalOpen} toggle={newLogToggle} className="modal-lg">
              <ModalHeader toggle={newLogToggle}>Добавить маневренное подразделение</ModalHeader>
              <ModalBody>
                <LogForm editingLogId={editingLogId} user={user} log={logs[editingLogId]} logdata={logdata} newLogToggle={newLogToggle} />
              </ModalBody>
            </Modal>
          </Card>
        </Col>

      </Row>
    </Container>

  </>
}

export default Logs