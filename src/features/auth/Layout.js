import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";
import AuthNavbar from '../navbars/AuthNavbar'

const Layout = ({ children, history }) => {
  return (
    <>
      <div className="main-content">
        <AuthNavbar />
        <div className="header bg-gradient-info py-7 py-lg-8">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  <h1 className="text-white">Добро пожаловать!</h1>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
        {/* Page content */}
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            {children}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default withRouter(Layout)