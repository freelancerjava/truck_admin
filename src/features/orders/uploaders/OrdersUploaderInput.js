import React from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'react-final-form-arrays';
import arrayMutators from 'final-form-arrays'
import { Button, FormGroup } from 'reactstrap';
import { Field } from 'react-final-form';
import FileUploader from './FileUploader';

const OrdersUploaderInput = ({ push, pop }) => {
  return (<>
    <div className="buttons d-flex align-items-center justify-content-between">

      <Button
        size='sm'
        color='danger' onClick={() => pop('attachments')}
      ><i className='fa fa-minus' /></Button>
      <Button
        size='sm'
        color='success'
        onClick={() => push('attachments', undefined)}
      ><i className='fa fa-plus' /></Button>
    </div>
    <div className='d-flex justify-content-center flex-wrap p-2'>
      <FieldArray name="attachments">
        {({ fields }) =>
          fields.map((name, index) => (
            <div key={name} className='w-50 p-2 uploader'>
              <span
                onClick={() => fields.remove(index)}
                style={{ cursor: 'pointer' }}
              >
                ❌
                    </span>
              <Field
                label="Attachments"
                name={`${name}.data`}
              >
                {props => (
                  <FormGroup>
                    {/* <Label for={props.id}>{props.label}</Label> */}
                    <FileUploader
                      type="attachments1"
                      id={`${name}${index}`}
                      onChange={props.input.onChange}
                      value={props.input.value}
                      name={props.input.name} />
                  </FormGroup>
                )}
              </Field>
            </div>
          ))
        }
      </FieldArray>
    </div>
  </>);
};

OrdersUploaderInput.propTypes = {};

export default OrdersUploaderInput;