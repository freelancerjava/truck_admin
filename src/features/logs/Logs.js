import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import { Link } from "react-router-dom";
import moment from "moment";
import {
  Button,
  Card,
  CardHeader,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Progress,
  Row,
  Table,
} from "reactstrap";
import { getLogsByGq } from "./query";
import { Header } from "../headers";
import LogRowHead from "./LogRowHead";
import LogRow from "./LogRow";
import LogForm from "./LogForm";
import { TimeNav } from "../../extrafunc/Timenav";
import RecordsList from "../records/RecordsList";
import CardBody from "reactstrap/lib/CardBody";
import CardFooter from "reactstrap/lib/CardFooter";

const Logs = () => {
  const ltu = localStorage.getItem("user");
  const [user, setuser] = useState(JSON.parse(ltu) || {});
  const [logs, setlogs] = useState([]);
  const [editingLogId, seteditingLogId] = useState(null);

  const [startDate, setStartDate] = useState(
    new Date(moment().format("MMM DD, YYYYY"))
  );
  const today = moment().dayOfYear() == moment(startDate).dayOfYear();

  const logdata = useQuery(
    [
      "logs",
      { date: moment(startDate).format("YYYY-MM-DD"), id: user.command.id },
    ],
    getLogsByGq
  );
  // console.log(logdata);

  useEffect(() => {
    if (logdata.data && logdata.data.logs != null) {
      setlogs(logdata.data.logs);
    } else {
      setlogs([]);
    }
  }, [logdata.data]);

  const [newLogModalOpen, setnewLogModalOpen] = useState(false);

  const newLogToggle = (index) => {
    seteditingLogId(index);
    setnewLogModalOpen(!newLogModalOpen);
  };

  return (
    <>
      <Container className="mt--7 row-transition" fluid>
        <Row>
          <Col>
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Суточные отчеты</h3>
                    <TimeNav
                      today={today}
                      startDate={startDate}
                      setStartDate={setStartDate}
                    />
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Посмотреть все
                    </Button>
                    <Button
                      color="info"
                      onClick={(e) => {
                        e.preventDefault();
                        setnewLogModalOpen(true);
                        seteditingLogId(null);
                      }}
                      size="sm"
                    >
                      Добавить
                    </Button>
                  </div>
                </Row>
              </CardHeader>

              <div className="scrolling-div">
                <Table className="align-items-center table-flush " responsive>
                  <LogRowHead />
                  <tbody>
                    {logs &&
                      logs.map((item, index) => {
                        return (
                          <LogRow
                            onClick={() => {
                              newLogToggle(index);
                            }}
                            item={item}
                            index={index}
                          />
                        );
                      })}
                  </tbody>
                </Table>
              </div>

              <Modal
                isOpen={newLogModalOpen}
                toggle={newLogToggle}
                className="modal-lg"
              >
                <ModalHeader toggle={newLogToggle}>
                  Добавить маневренное подразделение
                </ModalHeader>
                <ModalBody>
                  <LogForm
                    editingLogId={editingLogId}
                    user={user}
                    log={logs[editingLogId]}
                    logdata={logdata}
                    newLogToggle={newLogToggle}
                  />
                </ModalBody>
              </Modal>
            </Card>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <h3>Title</h3>
              </CardHeader>
              <RecordsList />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

Logs.propTypes = {};
Logs.defaultProps = {};

export default Logs;
