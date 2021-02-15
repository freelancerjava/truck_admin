import React, { useState, useEffect } from 'react';
import { CardTitle, CardBody, Container, Row, Col, Card, CardHeader } from 'reactstrap';
import EditForm from '../../extrafunc/Crud/EditForm';
import { getCat, updateCat, getCats } from './query';
import { useQuery } from 'react-query';
import CustomForm from '../../extrafunc/Crud/CustomForm';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';

function Category({ history }) {

  const catsdata = useQuery(['cats'], getCats)
  const [cats, setCats] = useState([])

  const id = history.location.pathname.split("update/")[1]

  useEffect(() => {
    let cancel = false
    if (!cancel) {
      if (catsdata.data) {
        setCats(catsdata.data)
      } else {
        setCats([])
      }
      cancel = true
    }
  }, [catsdata.data])
  return (
    <Row>
      <Col>
        <CustomForm
          title={`Категория ${id}`}
          parentNav={{
            url: '/admin/categories',
            title: 'Категории'
          }}
          id={id}
          query_fn={getCat}
          mut_update_fn={updateCat}
          query_key={'cat'}
          array_fields={true}
          fields={
            [
              [
                [
                  {
                    name: "Наименование uz",
                    key: 'name_uz',
                    type: {
                      name: 'text'
                    }
                  },
                  {
                    name: "Наименование ru",
                    key: 'name_ru',
                    type: {
                      name: 'text'
                    }
                  },
                  {
                    name: "Наименование en",
                    key: 'name_en',
                    type: {
                      name: 'text'
                    }
                  },
                  {
                    name: "Наименование hr",
                    key: 'name_hr',
                    type: {
                      name: 'text'
                    }
                  },
                  {
                    name: "Комиссия",
                    key: 'commission',
                    type: {
                      name: 'text'
                    }
                  },

                  {
                    name: "Процент минималки при отмене (%)",
                    key: 'cancel_percent',
                    type: {
                      name: 'text'
                    }
                  },
                ],
                [
                  {
                    name: "Описание uz",
                    key: 'description_uz',
                    type: {
                      name: 'text'
                    }
                  },
                  {
                    name: "Описание ru",
                    key: 'description_ru',
                    type: {
                      name: 'text'
                    }
                  },
                  {
                    name: "Описание en",
                    key: 'description_en',
                    type: {
                      name: 'text'
                    }
                  },
                  {
                    name: "Описание hr",
                    key: 'description_hr',
                    type: {
                      name: 'text'
                    }
                  },
                  {
                    name: "Добавленная сумма для отправки отклика",
                    key: 'offerExtraAmout',
                    type: {
                      name: 'text'
                    }
                  },
               
                ],
                [
                  {
                    name: "Тип",
                    key: 'type',
                    type: {
                      name: 'text'
                    }
                  },
                  {
                    name: "Родительская\nкатегория",
                    key: 'parentId',
                    type: {
                      name: 'select',
                      options: cats.map(item => {
                        const parent = item && item.parent && item.parent.name_ru || ''
                        return {
                          id: item.id,
                          name_ru: item.name_ru + ' - ' + parent
                        }
                      }),
                      value_field: 'id',
                      name_field: 'name_ru'
                    }
                  },
                  {
                    name: "Оригинальная\nкатегория",
                    key: 'originalId',
                    type: {
                      name: 'select',
                      options: cats.map(item => {
                        const parent = item && item.parent && item.parent.name_ru || ''
                        const rootParent = parent && parent.parent && parent.parent.name_ru || ''
                        return {
                          id: item.id,
                          name_ru: item.name_ru + ' - ' + parent + ' - ' + rootParent
                        }
                      }),
                      value_field: 'id',
                      name_field: 'name_ru'
                    }
                  },
                  {
                    name: "Описание",
                    key: 'description',
                    type: {
                      name: 'text'
                    }
                  },
                  {
                    name: "Видно водителям",
                    key: 'driverVisable',
                    type: {
                      name: 'checkbox'
                    }
                  },
                ],
                [
                  {
                    name: "Минимальная бесплатная дистанция",
                    key: 'min_distance',
                    type: {
                      name: 'text'
                    }
                  },
                  {
                    name: "Минимальное бесплатное ожидание",
                    key: 'min_waiting',
                    type: {
                      name: 'text'
                    }
                  },
                  {
                    name: "Позиция",
                    key: 'position',
                    type: {
                      name: 'text'
                    }
                  },
                  {
                    name: "Время между заказами",
                    key: 'offerTime',
                    type: {
                      name: 'text'
                    }
                  },
                ],
                [
                  {
                    name: "Эмблема",
                    key: 'icon',
                    proptype: 'obj',
                    type: {
                      name: 'file'
                    }
                  },
                ]
              ]
            ]
          }
        />
      </Col>
    </Row>
  );
};

Category.propTypes = {};
Category.defaultProps = {};

export default withRouter(Category)