import React, { useState, useEffect } from 'react';
import { CardTitle, CardBody, Container, Row, Col, Card, CardHeader } from 'reactstrap';
import { addTransport } from './query';
import { useQuery } from 'react-query';
import CustomForm from '../../extrafunc/Crud/CustomForm';

import { getCats } from '../categories/query';
import { getMakes, getModels } from '../../axios/query';

export default function NewTransport() {
  const catsdata = useQuery(['cats'], getCats)
  const [cats, setCats] = useState([])

  const makesdata = useQuery(['makes'], getMakes)
  const [makes, setMakes] = useState([])

  const modelsdata = useQuery(['models'], getModels)
  const [models, setModels] = useState([])

  useEffect(() => {
    let cancel = false
    if (!cancel) {
      if (catsdata.data) {
        setCats(catsdata.data)
      } else {
        setCats([])
      }
      if (makesdata.data) {
        setMakes(makesdata.data)
      } else {
        setMakes([])
      }
      if (modelsdata.data) {
        setModels(modelsdata.data)
      } else {
        setModels([])
      }
      cancel = true
    }
  }, [catsdata.data, makesdata.data, modelsdata.data])
  return (
    <Row>
      <Col>
        <CustomForm
          mut_create_fn={addTransport}
          query_key={'newtransport'}
          fields={
            [
              {
                name: 'Наименование',
                key: 'name',
                type: {
                  name: 'text'
                }
              },
              {
                name: 'Государственный\nномер',
                key: 'gos_number',
                type: {
                  name: 'text'
                }
              },
              {
                name: 'Год проблемы',
                key: 'year_of_issue',
                type: {
                  name: 'text'
                }
              },
              {
                name: 'Активный',
                key: 'is_active',
                type: {
                  name: 'text'
                }
              },
              {
                name: "Мин. цена",
                key: 'min_price',
                type: {
                  name: 'text'
                }
              },
              {
                name: "Цена за км.",
                key: 'one_km_price',
                type: {
                  name: 'text'
                }
              },
              {
                name: "Цена за ожидание",
                key: 'waiting_price',
                type: {
                  name: 'text'
                }
              },
              {
                name: "Цена за час",
                key: 'one_hour_price',
                type: {
                  name: 'text'
                }
              },
              {
                name: "Мин. время",
                key: 'min_hour',
                type: {
                  name: 'text'
                }
              },
              {
                name: 'Статус',
                key: 'status',
                type: {
                  name: 'text'
                }
              },
              {
                name: "Мин. цена заказа",
                key: 'min_order_price',
                type: {
                  name: 'text'
                }
              },
              {
                name: 'Год выпуска',
                key: 'year',
                type: {
                  name: 'text'
                }
              },
              {
                name: "Мин. цена за аренду",
                key: 'min_rent_price',
                type: {
                  name: 'text'
                }
              },
              {
                name: "Мин. цена за час",
                key: 'min_hour_price',
                type: {
                  name: 'text'
                }
              },
              {
                name: 'Цвет',
                key: 'color',
                type: {
                  name: 'text'
                }
              },
              // {
              //   name: "Водитель",
              //   key: 'driverId',
              //   type: {
              //     name: 'text'
              //   }
              // },
              {
                name: "Категория",
                key: 'categoryId',
                type: {
                  name: 'select',
                  options: cats,
                  value_field: 'id',
                  name_field: 'name_ru'
                }
              },
              {
                name: "Модель",
                key: 'modelId',
                type: {
                  name: 'select',
                  options: models,
                  value_field: 'id',
                  name_field: 'name'
                }
              },
              {
                name: "Производитель",
                key: 'makeId',
                type: {
                  name: 'select',
                  options: makes,
                  value_field: 'id',
                  name_field: 'name'
                }
              },
            ]
          }
        />
      </Col>
    </Row>
  );
};

NewTransport.propTypes = {};
NewTransport.defaultProps = {};
