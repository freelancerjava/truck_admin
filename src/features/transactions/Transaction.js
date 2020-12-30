import React, { useState, useEffect } from 'react';
import { CardTitle, CardBody, Container, Row, Col, Card, CardHeader } from 'reactstrap';
import { getUser, updateUser, getTransactions, getTransaction, updateTransaction } from './query';
import { useQuery } from 'react-query';
import CustomForm from '../../extrafunc/Crud/CustomForm';
import { withRouter } from 'react-router-dom';
import { getUsers } from '../users/query';
import { getOrders } from '../orders/query';

function Transaction({ history }) {
  const id = history.location.pathname.split("update/")[1]

  const [users, setusers] = useState([]);
  const users_q = useQuery('users', getUsers)

  useEffect(() => {
    let cancel = false
    if (!cancel) {
      if (users_q.data) {
        setusers(users_q.data)
      } else {
        setusers([])
      }
    }
    cancel = true
  }, [users_q.data])

  const [orders, setorders] = useState([]);
  const orders_q = useQuery('orders', getOrders)

  useEffect(() => {
    let cancel = false
    if (!cancel) {
      if (orders_q.data) {
        setorders(orders_q.data)
      } else {
        setorders([])
      }
    }
    cancel = true
  }, [orders_q.data])

  return (
    <Row>
      <Col>
        <CustomForm
          id={id}
          query_fn={getTransaction}
          mut_update_fn={updateTransaction}
          query_key={'transaction'}
          fields={
            [{
              name: "amount",
              key: "amount",
              type: { name: 'text' }
            },
            {
              name: "note",
              key: "note",
              type: { name: 'textarea' }
            },
            {
              name: "type",
              key: "type",
              type: {
                name: 'select',
                options: [
                  { key: 0, name: 'Наличные', value: 'cash' },
                  { key: 1, name: 'Карта', value: 'credit' },
                  { key: 2, name: 'Промокод', value: 'promocode' },
                ],
                value_field: 'value',
                name_field: 'name'
              }
            },
            {
              name: "source",
              key: "source",
              type: { name: 'text' }
            },
            {
              name: "status",
              key: "status",
              type: { name: 'text' }
            },
            {
              name: "is_closed",
              key: "is_closed",
              type: { name: 'checkbox' }
            },
            {
              name: "is_cancelled",
              key: "is_cancelled",
              type: { name: 'checkbox' }
            },
            {
              name: "closedAt",
              key: "closedAt",
              type: { name: 'datetime' }
            },
            {
              name: "holdId",
              key: "holdId",
              type: { name: 'text' }
            },
            {
              name: "before_balance",
              key: "before_balance",
              type: { name: 'text' }
            },
            {
              name: "userId",
              key: "userId",
              type: {
                name: 'select',
                options: users.filter((item)=>item.realm === 'driver'),
                value_field: 'id',
                name_field: 'first_name'
              }
            },
            {
              name: "clientId",
              key: "clientId",
              type: {
                name: 'select',
                options: users.filter((item)=>item.realm === 'client'),
                value_field: 'id',
                name_field: 'first_name'
              }
            },
            {
              name: "orderId",
              key: "orderId",
              type: {
                name: 'select',
                options: orders,
                value_field: 'id',
                name_field: 'comment'
              }
            },
            ]
          }
        />
      </Col>
    </Row>
  );
};

export default withRouter(Transaction)
Transaction.propTypes = {};
Transaction.defaultProps = {};

