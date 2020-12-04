import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import Status from './Status';

export default function Header() {
  return (
    <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
      <Container fluid>
        <div className="header-body row-transition">
          {/* Card stats */}
          <Row>
            <Col lg="6" xl="3">
              <Status
                title={"Новые заказы"}
                count={"250"}
                icon={"fas fa-cart-plus"}
                icon_class={"icon icon-shape bg-success text-white rounded-circle shadow"}
                period={"С прошедшего месяца"}
                period_class={"text-success mr-2"}
                period_count={"3.48%"}
                period_icon={"fa fa-arrow-up"}
              />
            </Col>
            <Col lg="6" xl="3">
              <Status
                title={"Выполненные заказы"}
                count={"525"}
                icon={"fas fa-thumbs-up"}
                icon_class={"icon icon-shape bg-warning text-white rounded-circle shadow"}
                period={"С прошедшей недели"}
                period_class={"text-danger mr-2"}
                period_count={"3.48%"}
                period_icon={"fas fa-arrow-down"}
              />
            </Col>
            <Col lg="6" xl="3">
              <Status
                title={"Активные заказы"}
                count={"236"}
                icon={"fas fa-users"}
                icon_class={"icon icon-shape bg-yellow text-white rounded-circle shadow"}
                period={"С прошедшего года"}
                period_class={"text-success mr-2"}
                period_count={"1.10%"}
                period_icon={"fas fa-arrow-down"}
              />
            </Col>
            <Col lg="6" xl="3">
              <Status
                title={"Отмененные заказы"}
                count={"49"}
                icon={"fas fa-thumbs-down"}
                icon_class={"icon icon-shape bg-danger text-white rounded-circle shadow"}
                period={"С прошедшго дня"}
                period_class={"text-danger mr-2"}
                period_count={"12%"}
                period_icon={"fas fa-arrow-up"}
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

Header.propTypes = {};
Header.defaultProps = {};
