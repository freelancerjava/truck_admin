import React from 'react';
import { Card, CardBody, Row, CardTitle, Col } from 'reactstrap';
import { NewOrdersSVG } from '../../assets/svg/main_svg';
// import PropTypes from 'prop-types';

export default function Status({ title, count, icon, period_class, icon_class, period_count, period, period_icon, IconComponent }) {
  return (
    <Card className="card-stats mb-4 mb-xl-0">
      <CardBody>
        <Row>
          <div className="col">
            {title && <CardTitle
              tag="h5"
              className=" text-muted mb-0"
            >{title}</CardTitle>}
            {!!count && <span className="h2 font-weight-bold mb-0">{count}</span>}
            {console.log(count)}
            
          </div>
          {!!icon && <Col className="col-auto">
            {/* <div className={icon_class}> */}
              {/* <i className={icon} /> */}
              {IconComponent}
            {/* </div> */}
          </Col>}
        </Row>
        <p className="mt-3 mb-0 text-muted text-sm">
          {!!period_class && <span className={period_class}>
            {period_count && period_icon && <i className={period_icon} />}{period_count}</span>}{" "}
          {!period && <span className="text-nowrap">{period}</span>}
        </p>
      </CardBody>
    </Card>
  );
};

Status.propTypes = {};
Status.defaultProps = {};
