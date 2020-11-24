
import React, { useEffect, useState } from "react";

import moment from 'moment'

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

const ReportHeader = ({ user }) => {

  return (
    <>
      <div
        className="header pb-2 pt-8 pt-lg-6 d-flex align-items-center"
        style={{
          minHeight: "100px",
          // backgroundImage:
          // "url(" + require("../../assets/img/theme/profile-cover.jpg") + ")",
          // backgroundColor: "#324321",
          backgroundSize: "cover",
          backgroundPosition: "center top"
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row className="w-100">
            <Col lg="12" md="12">
              <h1 className="display-2 text-white">{(user.role.name === 'Authenticated') ? <span>Доклады подчиненных подразделений</span> : <span>Расход в/ч {user.command.name} на {moment().format("DD.MM.YYYY")} г.</span>} </h1>
              <div className="d-flex align-items-start justify-content-between w-100">
                {/* <p className="text-white mt-0 mb-5">
                  {user.username} This is your profile page. You can see the progress you've
                  made with your work and manage your projects or assigned tasks
                </p> */}
                {/* <Button
                  color="info"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Edit profile
                </Button> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ReportHeader;
