import React, { useState, useEffect } from 'react';
import { CardTitle, CardBody, Container, Row, Col, Card, CardHeader } from 'reactstrap';
import NewForm from '../../extrafunc/Crud/Newform';
import { addCat, getCats } from './query';
import { useQuery } from 'react-query';
import CustomForm from '../../extrafunc/Crud/CustomForm';
// import PropTypes from 'prop-types';

export default function NewCategory() {
  const catsdata = useQuery('cats', getCats)
  const [cats, setCats] = useState([])

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
          mut_create_fn={addCat}
          query_key={'newcat'}
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
                    name: "Корневая\nкатегория",
                    key: 'rootCategoryId',
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
                    name: "Описание",
                    key: 'description',
                    type: {
                      name: 'text'
                    }
                  },
                ],
                [
                  {
                    name: "min_distance",
                    key: 'min_distance',
                    type: {
                      name: 'text'
                    }
                  },
                  {
                    name: "min_waiting",
                    key: 'min_waiting',
                    type: {
                      name: 'text'
                    }
                  },
                  {
                    name: "position",
                    key: 'position',
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

NewCategory.propTypes = {};
NewCategory.defaultProps = {};
