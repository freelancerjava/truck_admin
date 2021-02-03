import React, { useState, useEffect } from 'react';
import { getMakes } from '../../axios/query';
import { addModel } from './query';
import { useQuery } from 'react-query';
import { Row, Col } from 'reactstrap';
import CustomForm from '../../extrafunc/Crud/CustomForm';
// import PropTypes from 'prop-types';

export default function NewModel() {
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
          mut_create_fn={addModel}
          query_key={'newmodel'}
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

NewModel.propTypes = {};
NewModel.defaultProps = {};
