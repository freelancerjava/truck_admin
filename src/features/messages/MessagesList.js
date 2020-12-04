import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import CardHeader from "reactstrap/lib/CardHeader";
import CardTitle from "reactstrap/lib/CardTitle";
import Col from "reactstrap/lib/Col";
import Container from "reactstrap/lib/Container";
import Row from "reactstrap/lib/Row";
import Table from "reactstrap/lib/Table";
import { getMessagesByGq } from "./query";
// import PropTypes from 'prop-types';

export default function MessagesList() {
  const orders_data = useQuery("orders", getMessagesByGq);

  const [orders, setorders] = useState([]);
  useEffect(() => {
    let cancel = true;
    if (cancel) {
      if (orders_data.data && orders_data.data.orders) {
        setorders(orders_data.data.orders);
      }else{
        setorders([])
      }
      cancel = false;
    }
  }, [orders_data.data]);
  return (
    <Container fluid className="mt--7">
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <CardTitle tag="h4">Simple Table</CardTitle>
            </CardHeader>
            <CardBody>
              <Table className="tablesorter" responsive>
                <thead className="text-primary">
                  <tr>
                    <th>ID</th>
                    <th>User ID - username</th>
                    <th>Текст</th>
                    <th>Дата</th>
                    <th>Тип</th>
                    <th className="text-center">Избранные</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((item, key) => {
                    return (
                      <tr key={key}>
                        <td>{item.id}</td>
                        <td>{item.visitor.id} - {item.visitor.username}</td>
                        <td>{item.text}</td>
                        <td>{item.created_at}</td>
                        <td>{item.type.name}</td>
                        <td className="text-center"><i className="fa fa-star"></i></td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

MessagesList.propTypes = {};
MessagesList.defaultProps = {};
