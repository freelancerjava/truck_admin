import React, { useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { useMutation, useQuery } from 'react-query';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, Container, Form as RForm, FormGroup, Input, InputGroup, Row, Table } from 'reactstrap';
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import { createRecord, getUtilsByGq } from './query';
// import PropTypes from 'prop-types';

export default function Operations({ ...props }) {

  const [recordMut, recordMutRes] = useMutation(createRecord, {
    onSuccess: () => {

    }
  })

  const [srcs, setsrc] = useState([])
  const [devices, setdevices] = useState([])
  const [records, setrecords] = useState([])

  // const srcsdata = useQuery("srcs", getSrcByGq)
  // const devicedata = useQuery("devices", getDeviceByGq)
  const utils = useQuery('utils', getUtilsByGq)

  // console.log(utils);

  const user = JSON.parse(localStorage.getItem('user'))



  useEffect(() => {
    let cancel = false

    if (!cancel) {
      if (utils.data && utils.data.srcObjects != null) {
        setsrc(utils.data.srcObjects)
      } else {
        setsrc([])
      }

      if (utils.data && utils.data.devices != null) {
        setdevices(utils.data.devices)
      } else {
        setdevices([])
      }

      if (utils.data && utils.data.records != null) {
        setrecords(utils.data.records.map(item => {
          return {
            id: item.id,
            src_object: item.src_object.id,
            device: item.device.id,
            count: item.count,
            command: item.command || user.command.id
          }
        }))
      } else {
        setrecords([])
      }
    } else {
      cancel = true
    }

  }, [utils.data, user.command.id])

  const onSubmit = (data) => {
    // let temp = { ...data }
    // temp.command = user.command.id
    recordMut({ data: data, records: records })
  }
  return (
    <Form
      onSubmit={onSubmit}
      mutators={{
        // potentially other mutators could be merged here
        ...arrayMutators
      }}

      initialValues={{
        records: records
      }}
      render={({ handleSubmit, submitError, values, form }) => (
        <RForm onSubmit={handleSubmit} className="form">
          {submitError && <div className="text-red text-center">{submitError}</div>}

          <Card>
            <CardHeader>Добавление записей</CardHeader>
            <CardBody>

              <FieldArray name="records">
                {({ fields }) => (
                  <div>
                    <Table className="align-items-center table-flush" responsive>
                      <thead className="thead-light">
                        <tr>
                          <th scope="col">Разведываемые объекты</th>
                          <th scope="col">Количество представленных разведданных</th>
                          <th scope="col">Средства перехвата</th>
                          <th scope="col" />
                        </tr>
                      </thead>
                      <tbody>
                        {fields.map((name, index) => (
                          <tr className="row-transition" key={name}>
                            <td>
                              <FormGroup className="mr-2 mt-2 mb-2">
                                <InputGroup className="input-group-alternative">
                                  <Field name={`${name}.src_object`}>
                                    {props => (
                                      <Input type="select"
                                        name={props.input.name}
                                        value={props.input.value}
                                        onChange={props.input.onChange}>
                                        <option />
                                        {srcs.map((item, key) => {
                                          return <option value={item.id}>{item.name}</option>
                                        })}
                                      </Input>
                                    )}
                                  </Field>
                                </InputGroup>
                              </FormGroup>
                            </td>
                            <td>
                              <FormGroup className="m-2">
                                <InputGroup className="input-group-alternative">
                                  <Field name={`${name}.count`}>
                                    {props => (
                                      <Input placeholder="Количество перехвата" type="number"
                                        name={props.input.name}
                                        value={props.input.value}
                                        onChange={props.input.onChange}
                                      />
                                    )}
                                  </Field>
                                </InputGroup>
                              </FormGroup>
                            </td>
                            <td>
                              <FormGroup className="m-2">
                                <InputGroup className="input-group-alternative">
                                  <Field name={`${name}.device`}>
                                    {props => (
                                      <Input type="select"
                                        name={props.input.name}
                                        value={props.input.value}
                                        onChange={props.input.onChange}>
                                        <option />
                                        {devices.map((item, key) => {
                                          return <option value={item.id}>{item.name}</option>
                                        })}
                                      </Input>
                                    )}
                                  </Field>
                                </InputGroup>
                              </FormGroup>
                            </td>
                            <td>
                              <Button color="danger" onClick={() => fields.remove(index)}>Убрать</Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                    <Button
                      block
                      color="success"
                      onClick={() => fields.push({})}
                    >Добавить</Button>
                    <div className="array-field-row">
                      <Button
                        block
                        color="secondary"
                        onClick={form.reset}
                      >Сбросить</Button>
                      <Button
                        block
                        color="primary"
                        onClick={() => handleSubmit(values)}
                      >Сохранить</Button>
                    </div>


                  </div>
                )}
              </FieldArray>
            </CardBody>
          </Card>



        </RForm>)}
      {...props}
    />
  );
};

Operations.propTypes = {};
Operations.defaultProps = {};
