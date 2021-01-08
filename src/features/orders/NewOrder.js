import React, { useState, useEffect } from 'react';
import { CardTitle, CardBody, Container, Row, Col, Card, CardHeader } from 'reactstrap';
import { addOrder, getOrders } from './query';
import { useQuery } from 'react-query';
import CustomForm from '../../extrafunc/Crud/CustomForm';
import { getCats } from '../categories/query';
import { getTransports } from '../transports/query';
import OrdersUploader from './uploaders/OrdersUploader';

export default function NewOrder() {
  const catsdata = useQuery(['cats'], getCats)
  const [cats, setCats] = useState([])

  const transportsdata = useQuery(['transports'], getTransports)
  const [transports, setTransports] = useState([])

  useEffect(() => {
    let cancel = false
    if (!cancel) {
      if (catsdata.data) {
        setCats(catsdata.data)
      } else {
        setCats([])
      }

      if (transportsdata.data) {
        setTransports(transportsdata.data)
      } else {
        setTransports([])
      }
      cancel = true
    }
  }, [catsdata.data, transportsdata.data])
  return (
    <Row>
      <Col>
        <CustomForm
          mut_create_fn={addOrder}
          query_key={'neworder'}
          fields={
            [
              {
                name: 'Начало маршрута',
                key: 'fromAddress',
                type: {
                  name: 'text'
                }
              },
              {
                name: 'Конец маршрута',
                key: 'toAddress',
                type: {
                  name: 'text'
                }
              },
              {
                name: 'Файлы',
                key: 'attachments',
                media: true,
                type: {
                  name: 'media',
                  subType: 'media',
                  uploader: OrdersUploader
                }
              },
              {
                name: 'Когда',
                key: 'when',
                type: {
                  name: 'date'
                }
              },
              {
                name: 'Дата',
                key: 'date',
                type: {
                  name: 'date'
                }
              },
              {
                name: 'Статус',
                key: 'status',
                type: {
                  name: 'select',
                  options: [
                    { key: 0, name: 'Новые', value: 'new' },
                    { key: 1, name: 'Принятые', value: 'arrived' },
                    { key: 2, name: 'Выполняются', value: 'on_the_way' },
                    { key: 3, name: 'Завершенные', value: 'completed' },
                    { key: 4, name: 'Отмененные', value: 'closed' },
                  ],
                  value_field: 'value',
                  name_field: 'name'
                }
              },
              {
                name: 'Дата начало',
                key: 'start_date',
                type: {
                  name: 'date'
                }
              },
              {
                name: 'Дата конец',
                key: 'end_date',
                type: {
                  name: 'date'
                }
              },
              {
                name: 'Время согласия',
                key: 'accepted_time',
                type: {
                  name: 'date'
                }
              },
              {
                name: 'Время доставки',
                key: 'delivered_time',
                type: {
                  name: 'date'
                }
              },
              {
                name: 'Тип',
                key: 'type',
                type: {
                  name: 'text'
                }
              },
              {
                name: 'Комментарий',
                key: 'comment',
                type: {
                  name: 'textarea'
                }
              },
              {
                name: 'Расстояние',
                key: 'distance',
                type: {
                  name: 'number'
                }
              },
              {
                name: 'Общая сумма',
                key: 'total_price',
                type: {
                  name: 'number'
                }
              },
              {
                name: 'Категория',
                key: 'categoryId',
                type: {
                  name: 'select',
                  options: cats,
                  value_field: 'id',
                  name_field: 'name_ru'
                }
              },
              {
                name: 'Транспорт',
                key: 'transportId',
                type: {
                  name: 'select',
                  options: transports,
                  value_field: 'id',
                  name_field: 'gos_number'
                }
              },
            ]
          }
        />
      </Col>
    </Row>
  );
};

NewOrder.propTypes = {};
NewOrder.defaultProps = {};
