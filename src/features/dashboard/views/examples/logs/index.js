import React, { useState } from 'react';
import { Button, Card, CardHeader, Col, Container, Progress, Row, Table } from 'reactstrap';
import Header from '../../../components/Headers/Header';
import { LogRow } from './LogRow';
import LogRowHead from './LogRowHead';
import './style.less'

const Logs = () => {

    const logs = [{}, {}]

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
                                </div>
                            </Row>
                            <Row>
                                <Col>
                                    <h4 className="mb-0 text-center">
                                        Итоги боевого дежурства маневренными подразделениями <br />
                                        в период с 11-11-2020 г. по 11-18-2020 г.
                                    </h4>
                                </Col>
                            </Row>
                        </CardHeader>

                        <div className="scrolling-div">
                            <Table className="align-items-center table-flush " responsive>
                                <LogRowHead />
                                <tbody>
                                    {logs.map((item, index) => {
                                        return <LogRow />
                                    })}
                                </tbody>
                            </Table>
                        </div>
                    </Card>
                </Col>

            </Row>
        </Container>

    </>
}

export default Logs