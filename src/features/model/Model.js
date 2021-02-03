import React, { useState, useEffect } from 'react';
import { getMakes } from '../../axios/query';
import { addModel, updateModel, getModel } from './query';
import { useQuery } from 'react-query';
import { Row, Col } from 'reactstrap';
import CustomForm from '../../extrafunc/Crud/CustomForm';
import { useHistory } from 'react-router-dom';

export default function Model() {
  const history = useHistory()
  const id = history.location.pathname.split("update/")[1]

  const makesdata = useQuery(['makes'], getMakes)
  const [makes, setMakes] = useState([])
  useEffect(() => {
    let cancel = false
    if (!cancel) {
      if (makesdata.data) {
        setMakes(makesdata.data)
      } else {
        setMakes([])
      }
      cancel = true
    }
  }, [makesdata.data])
  return (
    <Row>
      <Col>
        <CustomForm
          id={id}
          mut_update_fn={updateModel}
          query_fn={getModel}
          query_key={'model'}
          array_fields={true}
          fields={
            [
              [
                [
                  {
                    name: 'Наименование',
                    key: 'name',
                    type: {
                      name: 'text'
                    }
                  },
                ],
                [
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
                ],
              ],
            ]
          }
        />
      </Col>
    </Row>
  );
};

Model.propTypes = {};
Model.defaultProps = {};
