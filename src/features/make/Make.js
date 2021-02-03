import React, { useState, useEffect } from 'react';
import { getMakes } from '../../axios/query';
import { addMake, updateMake, getMake } from './query';
import { useQuery } from 'react-query';
import { Row, Col } from 'reactstrap';
import CustomForm from '../../extrafunc/Crud/CustomForm';
import { useHistory } from 'react-router-dom';

export default function Make() {
  const history = useHistory()
  const id = history.location.pathname.split("update/")[1]

  return (
    <Row>
      <Col>
        <CustomForm
          id={id}
          mut_update_fn={updateMake}
          query_fn={getMake}
          query_key={'make'}
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
                
              ],
            ]
          }
        />
      </Col>
    </Row>
  );
};

Make.propTypes = {};
Make.defaultProps = {};
