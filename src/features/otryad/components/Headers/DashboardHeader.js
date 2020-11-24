
import React from "react";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col, Table } from "reactstrap";

const DashboardHeader = ({ reports }) => {
  return (
    <>
      <div className="header bg-gradient-green pb-8 pt-5 pt-md-7">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            {/* <Row className="mb-2">
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Войсковая часть
                          </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          33569 <span className="h5 text-muted ml-2">(ДПЧ: Палончиев А.)</span>
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-dark-green text-white rounded-circle shadow">
                          <i className="ni ni-building" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          По списку
                          </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          16
                          </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-dark-green text-white rounded-circle shadow">
                          <i className="ni ni-bullet-list-67" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          На лицо
                          </CardTitle>
                        <span className="h2 font-weight-bold mb-0">12</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-dark-green text-white rounded-circle shadow">
                          <i className="fas fa-users" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Командировка
                          </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          2
                          </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-dark-green text-white rounded-circle shadow">
                          <i className="ni ni-briefcase-24" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>


            </Row>
            <Row className="mb-2">
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Войсковая часть
                          </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          93669 <span className="h5 text-muted ml-2">(ДПЧ: Фамилия А.)</span>
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-dark-green text-white rounded-circle shadow">
                          <i className="ni ni-istanbul" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          По списку
                          </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          35
                          </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-dark-green text-white rounded-circle shadow">
                          <i className="ni ni-bullet-list-67" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          На лицо
                          </CardTitle>
                        <span className="h2 font-weight-bold mb-0">30</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-dark-green text-white rounded-circle shadow">
                          <i className="fas fa-users" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Командировка
                          </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          4
                          </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-dark-green text-white rounded-circle shadow">
                          <i className="ni ni-briefcase-24" />
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>


            </Row> */}
            <Row>
              <Col>
                <Table className="align-items-center table-flush" responsive>
                  {/* <thead className="thead-light">
                    <tr>
                      <th scope="col">Наименование <br /> подразделения</th>
                      <th scope="col">Категория</th>
                      <th scope="col">Статус</th>
                      <th scope="col">Исполнитель</th>
                      <th scope="col">Процесс</th>
                      <th scope="col" />
                    </tr>
                  </thead> */}
                  <tbody>
                    {
                      reports.map((item) => {
                        return (
                          <tr>
                            <td>
                              <Card className="card-stats mb-4 mb-xl-0">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase text-muted mb-0"
                                      >Войсковая часть</CardTitle>
                                      <span className="h2 font-weight-bold mb-0">
                                        {item.command.name} <span className="h5 text-muted ml-2">(ДПЧ: {item.dej})</span>
                                      </span>
                                    </div>
                                    <Col className="col-auto">
                                      <div className="icon icon-shape bg-dark-green text-white rounded-circle shadow">
                                        <i className="ni ni-istanbul" />
                                      </div>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                            </td>
                            <td>
                              <Card className="card-stats mb-4 mb-xl-0">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase text-muted mb-0"
                                      >По списку</CardTitle>
                                      <span className="h2 font-weight-bold mb-0">{item.royxat_boyicha}</span>
                                    </div>
                                    <Col className="col-auto">
                                      <div className="icon icon-shape bg-dark-green text-white rounded-circle shadow">
                                        <i className="fas fa-list" />
                                      </div>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                            </td>
                            <td>
                              <Card className="card-stats mb-4 mb-xl-0">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase text-muted mb-0"
                                      >На лицо</CardTitle>
                                      <span className="h2 font-weight-bold mb-0">{item.safda}</span>
                                    </div>
                                    <Col className="col-auto">
                                      <div className="icon icon-shape bg-dark-green text-white rounded-circle shadow">
                                        <i className="fas fa-users" />
                                      </div>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                            </td>
                            <td>
                              <Card className="card-stats">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase text-muted mb-0"
                                      >Командировка</CardTitle>
                                      <span className="h2 font-weight-bold mb-0">{item.safar}</span>
                                    </div>
                                    <Col className="col-auto">
                                      <div className="icon icon-shape bg-dark-green text-white rounded-circle shadow">
                                        <i className="ni ni-briefcase-24" />
                                      </div>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                            </td>
                            <td>
                              <Card className="card-stats">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase text-muted mb-0"
                                      >Отпуск</CardTitle>
                                      <span className="h2 font-weight-bold mb-0">{item.tatil}</span>
                                    </div>
                                    <Col className="col-auto">
                                      <div className="icon icon-shape bg-dark-green text-white rounded-circle shadow">
                                        <i className="fas fa-subway" />
                                      </div>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                            </td>
                            <td>
                              <Card className="card-stats">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase text-muted mb-0"
                                      >Госпиталь</CardTitle>
                                      <span className="h2 font-weight-bold mb-0">{item.gospital}</span>
                                    </div>
                                    <Col className="col-auto">
                                      <div className="icon icon-shape bg-dark-green text-white rounded-circle shadow">
                                        <i className="fas fa-medkit" />
                                      </div>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                            </td>

                            <td>
                              <Card className="card-stats">
                                <CardBody>
                                  <Row>
                                    <div className="col">
                                      <CardTitle
                                        tag="h5"
                                        className="text-uppercase text-muted mb-0"
                                      >Домашний карантин</CardTitle>
                                      <span className="h2 font-weight-bold mb-0">{item.uy_karantin}</span>
                                    </div>
                                    <Col className="col-auto">
                                      <div className="icon icon-shape bg-dark-green text-white rounded-circle shadow">
                                        <i className="fas fa-home" />
                                      </div>
                                    </Col>
                                  </Row>
                                </CardBody>
                              </Card>
                            </td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </Table>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
}

export default DashboardHeader;
