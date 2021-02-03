import React, { useState, useEffect } from 'react';
import { getMakes } from '../../axios/query';
import { addMake } from './query';
import { useQuery } from 'react-query';
import { Row, Col } from 'reactstrap';
import CustomForm from '../../extrafunc/Crud/CustomForm';
// import PropTypes from 'prop-types';

export default function NewMake() {
  
  return (
    <Row>
      <Col>
        <CustomForm
          mut_create_fn={addMake}
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
              ],
            ]
          }
        />
      </Col>
    </Row>
  );
};

NewMake.propTypes = {};
NewMake.defaultProps = {};
