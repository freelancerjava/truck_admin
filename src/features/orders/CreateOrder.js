import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Input, InputGroup, Label, FormGroup, Jumbotron, Button } from 'reactstrap';
import ViewNav from '../elements/ViewNav';
import { withRouter } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { useQuery } from 'react-query';
import { getUsers } from '../users/query';
// import PropTypes from 'prop-types';

export default withRouter(function CreateOrder({ history, title, data }) {

  const usersdata = useQuery(['users'], getUsers)
  const [users, setUsers] = useState([])

  useEffect(() => {
    let cancel = false
    if (!cancel && usersdata.data) {
      setUsers(usersdata.data)
    } else {
      setUsers([])
    }

  }, [usersdata.data])

  const onSubmit = (values) => {
    // let temp = { ...values }
    // fields.map((item, key) => {
    //   if (!temp[item.key]) {
    //     if (item.proptype == 'bool') {
    //       temp[item.key] = false
    //     } else if (item.proptype == 'number') {
    //       temp[item.key] = 0
    //     } else {
    //       temp[item.key] = null
    //     }
    //   }
    // })
    // temp.date = moment().format("YYYY-MM-DD")
    // // temp.user = user.id
    // temp.command = user.command.id
    // // temp.file = 1

    // if (data == null) mutCreate({ body: temp }); else
    //   mutUpdate({ id: id, body: temp })
    // console.log(temp);
    // repMutRes.onSuccess(repdata.refetch())
  }

  return (
    <>
      <Row className='mb-3'>
        <Col>
          <div className='d-flex justify-content-between align-items-center'>
            <ViewNav
              title={'Создание нового заказа'}
              parentNav={{
                url: '/admin/orders/index',
                title: 'Заказы'
              }}
            />
            <div>
              <Button color='primary'>Создать</Button>
              <Button onClick={() => history.goBack()}>Отмена</Button>
            </div>
          </div>
        </Col>
      </Row>

      <Form
        onSubmit={onSubmit}
        // validate={validate}
        initialValues={data || {}}
        render={({ handleSubmit, submitError, values, form }) => (
          <form onSubmit={handleSubmit} className="form">
            {submitError && <div className="text-red text-center">{submitError}</div>}

            <Row className='mb-3 create-order'>
              {/* {JSON.stringify(values)} */}
              <Col className='d-flex justify-content-between'>
                <Card className='p-3 w-100'>
                  <h4 className='title font-weight-bold text-primary text-uppercase'>
                    {title || 'Данные заказчика'}
                  </h4>
                  <Field name='creatorId'>
                    {props => (
                      <div className='d-flex'>

                        <FormGroup key={null} className="mb-1 mt-2 p-1">
                          <InputGroup className="input-group-alternative">
                            <Label for='file-id'>
                              <div className='create-img'>
                                <img src={props.input.value.attachments
                                  && props.input.value.attachments.main
                                  && props.input.value.attachments.main.preview
                                  || require('../../assets/img/acc_img.png')} />
                              </div>
                            </Label>
                            <Input hidden type='file' id='file-id' className='p-1' />
                          </InputGroup>
                        </FormGroup>

                        <div className='d-flex flex-row flex-wrap ml-3'>
                          <FormGroup key={1} className="mb-1 p-1">
                            <Label for='nput-id'>ФИО</Label>
                            <InputGroup className="input-group-alternative">
                              <Input type='text' id='input-id' className='p-1' value={props.input.value.first_name} />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup key={2} className="mb-1 p-1">
                            <Label for='nput-id'>номер телефона</Label>
                            <InputGroup className="input-group-alternative">
                              <Input type='text' id='input-id' className='p-1' value={props.input.value.phone}/>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup key={3} className="mb-1 p-1">
                            <Label for='nput-id'>Пользователь</Label>
                            <InputGroup className="input-group-alternative">
                              <Input type='select' id='input-id' className='p-1'
                                name={props.input.name}
                                onChange={() => {
                                  props.input.onChange({ ...props.input.value, ...users[0] })
                                }
                                }
                                value={props.input.value.id}
                              >
                                <option>---</option>
                                {users.map((item, key) => {
                                  return (
                                    <option key={key} value={item.id}>{item.first_name} - {item.email}</option>
                                  )
                                })}
                              </Input>
                            </InputGroup>
                          </FormGroup>
                        </div>
                      </div>
                    )}</Field>
                </Card>
                <Card className=' ml-3 p-3 w-40'>
                  <h4 className='title font-weight-bold text-primary text-uppercase'>
                    {title || 'Общая информация'}
                  </h4>
                  <div className='d-flex flex-row flex-wrap'>
                    <FormGroup key={null} className="mb-3 p-1">
                      <Label for='nput-id'>Заказ</Label>
                      <InputGroup className="input-group-alternative">
                        <Input type='text' id='input-id' className='p-1' />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup key={null} className="mb-3 p-1">
                      <Label for='nput-id'>Статус</Label>
                      <InputGroup className="input-group-alternative">
                        <Input type='text' id='input-id' className='p-1' />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup key={null} className="mb-3 p-1">
                      <Label for='nput-id'>Дата</Label>
                      <InputGroup className="input-group-alternative">
                        <Input type='text' id='input-id' className='p-1' />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup key={null} className="mb-3 p-1">
                      <Label for='nput-id'>время</Label>
                      <InputGroup className="input-group-alternative">
                        <Input type='text' id='input-id' className='p-1' />
                      </InputGroup>
                    </FormGroup>
                  </div>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col md='7'>
                <Card className=' p-3 w-100'>
                  <h4 className='title font-weight-bold text-primary text-uppercase'>
                    {title || 'подробная информация о заказе'}
                  </h4>
                  <div className='d-flex flex-row flex-wrap'>
                    <FormGroup key={null} className="mb-3 p-1">
                      <Label for='nput-id'>Заказ</Label>
                      <InputGroup className="input-group-alternative">
                        <Input type='text' id='input-id' className='p-1' />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup key={null} className="mb-3 p-1">
                      <Label for='nput-id'>Статус</Label>
                      <InputGroup className="input-group-alternative">
                        <Input type='text' id='input-id' className='p-1' />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup key={null} className="mb-3 p-1">
                      <Label for='nput-id'>Дата</Label>
                      <InputGroup className="input-group-alternative">
                        <Input type='text' id='input-id' className='p-1' />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup key={null} className="mb-3 p-1">
                      <Label for='nput-id'>время</Label>
                      <InputGroup className="input-group-alternative">
                        <Input type='text' id='input-id' className='p-1' />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup key={null} className="mb-3 p-1">
                      <Label for='nput-id'>время</Label>
                      <InputGroup className="input-group-alternative">
                        <Input type='text' id='input-id' className='p-1' />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup key={null} className="mb-3 p-1">
                      <Label for='nput-id'>время</Label>
                      <InputGroup className="input-group-alternative">
                        <Input type='text' id='input-id' className='p-1' />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup key={null} className="mb-3 p-1">
                      <Label for='nput-id'>время</Label>
                      <InputGroup className="input-group-alternative">
                        <Input type='text' id='input-id' className='p-1' />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup key={null} className="mb-3 p-1">
                      <Label for='nput-id'>время</Label>
                      <InputGroup className="input-group-alternative">
                        <Input type='text' id='input-id' className='p-1' />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup key={null} className="mb-3 p-1">
                      <Label for='nput-id'>время</Label>
                      <InputGroup className="input-group-alternative">
                        <Input type='text' id='input-id' className='p-1' />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup key={null} className="mb-3 p-1 w-100">
                      <Label for='nput-id'>время</Label>
                      <InputGroup className="input-group-alternative">
                        <Input type='textarea' id='input-id' className='p-1' />
                      </InputGroup>
                    </FormGroup>

                    <FormGroup key={null} className="mb-3 p-1">
                      <Label for='nput-id'>время</Label>
                      <InputGroup className="input-group-alternative">
                        <Input type='text' id='input-id' className='p-1' />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup key={null} className="mb-3 p-1">
                      <Label for='nput-id'>время</Label>
                      <InputGroup className="input-group-alternative">
                        <Input type='text' id='input-id' className='p-1' />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup key={null} className="mb-3 p-1">
                      <Label for='nput-id'>время</Label>
                      <InputGroup className="input-group-alternative">
                        <Input type='text' id='input-id' className='p-1' />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup key={null} className="mb-3 p-1">
                      <Label for='nput-id'>время</Label>
                      <InputGroup className="input-group-alternative">
                        <Input type='text' id='input-id' className='p-1' />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup key={null} className="mb-3 p-1">
                      <Label for='nput-id'>время</Label>
                      <InputGroup className="input-group-alternative">
                        <Input type='text' id='input-id' className='p-1' />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup key={null} className="mb-3 p-1">
                      <Label for='nput-id'>время</Label>
                      <InputGroup className="input-group-alternative">
                        <Input type='text' id='input-id' className='p-1' />
                      </InputGroup>
                    </FormGroup>
                  </div>
                </Card>
              </Col>
              <Col md='5' >
                <Card className='p-3 mb-3'>
                  <h4 className='title font-weight-bold text-primary text-uppercase'>
                    {title || 'файлы заказа'}
                  </h4>
                  <Jumbotron className='bg-white img-center'>
                    <img src={require('../../assets/img/addFiles.png')} />
                  </Jumbotron>
                </Card>
                <Card className='p-3'>
                  <h4 className='title font-weight-bold text-primary text-uppercase'>
                    {title || 'маршрут на карте'}
                  </h4>
                  <Jumbotron className='bg-white img-center'>
                    <img src={require('../../assets/img/addRoute.png')} />
                  </Jumbotron>
                </Card>
              </Col>
            </Row>
          </form>
        )
        } />
    </>
  );
})
