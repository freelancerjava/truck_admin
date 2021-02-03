import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Input, InputGroup, Label, FormGroup, Jumbotron, Button } from 'reactstrap';
import ViewNav from '../elements/ViewNav';
import { withRouter } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays'
import { useQuery, useMutation } from 'react-query';
import { getUsers } from '../users/query';


import { AutoComplete } from 'antd';
// import AutocomplateInput, { SelectMapInput } from './SelectMapInput';
import { searchLocation, getOrder, addOrder } from './query';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { getCats } from '../categories/query';
import UserSelectInput from './UserSelectInput';
import OrderDetailInput from './OrderDetailInput';
import { Map } from '../../extrafunc/Map';
import MapSelectInput from './MapSelectInput';
import OrdersUploaderInput from './uploaders/OrdersUploaderInput';
// import PropTypes from 'prop-types';

export default withRouter(function CreateOrder({ history, title }) {

  const [order, setOrder] = useState({
    // ...orderData.data,
    comment: null,
    status: null,
    category: {
      parent: {
        parent: {}
      }
    },
    creator: null,
    attachments: null,
    categoryId: null,
    fromAddress: null,
    toAddress: null,
    fromCoordinates: null,
    toCoordinates: null,
    creatorId: null,
    coors: {
      from: null,
      to: null,
      fromAddress: null,
      toAddress: null
    }
  })
  const filter = JSON.stringify({ include: [{ category: ['rootCategory', { parent: ['parent'] }] }, 'creator', 'driver'] })

  const usersdata = useQuery(['users', { filter: JSON.stringify({ sort: "id DESC", where: { realm: 'client' } }) }], getUsers)
  const [users, setUsers] = useState([])

  const categoriesdata = useQuery(['categories',
    { filter: JSON.stringify({ sort: "id DESC", include: [{ parent: ['parent'] }] }) }], getCats)
  const [categories, setcategories] = useState([])

  useEffect(() => {

    if (usersdata.data) {
      setUsers(usersdata.data)
    } else {
      setUsers([])
    }
    if (categoriesdata.data) {
      setcategories(categoriesdata.data)
    } else {
      setcategories([])
    }

  }, [usersdata.data, categoriesdata.data])

  const [mutCreate, mutCreateRes] = useMutation(addOrder, {
    onSuccess: (data) => {
      history.goBack()
    }
  })

  const onSubmit = (values) => {
    let temp = { ...values }

    temp.categoryId = values.category && values.category.id
    temp.fromAddress = values.coors && values.coors.fromAddress
    temp.toAddress = values.coors && values.coors.toAddress
    temp.fromCoordinates = values.coors && values.coors.from
    temp.toCoordinates = values.coors && values.coors.to
    temp.creatorId = values.creator && values.creator.id
    temp.status = values.status
    temp.comment = values.comment

    // if (data == null) 
    mutCreate({ body: temp });
    console.log(temp);
  }

  return (
    <div className='create-order'>


      <Form
        onSubmit={onSubmit}
        // validate={validate}
        initialValues={order}
        mutators={{
          ...arrayMutators
        }}
        // validate={validate}
        render={({ handleSubmit, submitError, values,

          form, pristine, form: {
            mutators: { push, pop }
          } }) => (
            <form onSubmit={handleSubmit} className="form">
              {submitError && <div className="text-red text-center">{submitError}</div>}

              <Row className='mb-3'>
                <Col>
                  <div className='d-flex justify-content-between align-items-center'>
                    <ViewNav
                      title={`Создание заказа`}
                      parentNav={{
                        url: '/admin/orders',
                        title: 'Заказы'
                      }}
                    />
                    <div>
                      <Button size='sm' disabled={pristine} color='primary' onClick={() => handleSubmit(values)}>Сохранить</Button>
                      <Button size='sm' disabled={pristine} color='default' onClick={() => form.reset()}>Сбросить</Button>
                      <Button size='sm' onClick={() => history.goBack()}>Отмена</Button>
                    </div>
                  </div>
                </Col>
              </Row>

              <Row className='mb-3 '>
                {/* {JSON.stringify(values)} */}
                <Col className='d-flex justify-content-between'>
                  <Card className='p-3 w-100'>
                    <h4 className='title font-weight-bold text-primary text-uppercase'>
                      {title || 'Данные заказчика'}
                    </h4>
                    <UserSelectInput users={users} />
                  </Card>
                  <Card className=' ml-3 p-3 w-40'>
                    <h4 className='title font-weight-bold text-primary text-uppercase'>
                      {title || 'Общая информация'}
                    </h4>
                    <OrderDetailInput />
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
                      <FormGroup className="mb-3 p-1">
                        <Label for='from-address-id'>Адресс от</Label>
                        <InputGroup className="input-group-alternative selectMapInput">
                          <Field name='coors' >
                            {({ input }) => (
                              <Input
                                disabled
                                type='text'
                                id='from-address-id'
                                className='p-1'
                                value={input.value.fromAddress}
                              />
                            )}
                          </Field>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-3 p-1">
                        <Label for='to-address-id'>Адресс до</Label>
                        <InputGroup className="input-group-alternative selectMapInput">
                          <Field name='coors' >
                            {({ input }) => (
                              <Input
                                disabled
                                type='text'
                                id='to-address-id'
                                className='p-1'
                                value={input.value.toAddress}
                              />
                            )}
                          </Field>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-3 p-1">
                        <Label for='nput-id'>Дистанция</Label>
                        <InputGroup className="input-group-alternative">
                          <Field name='distance' >
                            {({ input }) => (
                              <Input type='text' id='input-id' className='p-1' name={input.name} value={input.value} onChange={input.onChange} />
                            )}
                          </Field>
                        </InputGroup>
                      </FormGroup>
                      <Field name='category' >
                        {({ input }) => (<>
                          <FormGroup className="mb-3 p-1">
                            <Label for='cat-parent-parent-id'>Выбранный тип авто</Label>
                            <InputGroup className="input-group-alternative">

                              <Input type='select' id='cat-parent-parent-id' className='p-1'
                                value={input.value.parent && input.value.parent.parent && input.value.parent.parent.id || ''}
                                onChange={({ target: { value } }) => {
                                  let categorypp = { ...categories.filter(item => item.id == value)[0] }
                                  let temp = {
                                    parent: {
                                      parent: categorypp
                                    }
                                  }

                                  input.onChange(temp)
                                  console.log(temp);
                                }}
                              >
                                <option >---</option>
                                {categories.filter(item => item.parent == null).map((item, key) => {
                                  return (
                                    <option key={key} value={item.id}>{item.name_ru}</option>
                                  )
                                })}
                              </Input>

                            </InputGroup>
                          </FormGroup>
                          <FormGroup className="mb-3 p-1">
                            <Label for='cat-parent-id'>Выбранный тип кузова</Label>
                            <InputGroup className="input-group-alternative">
                              <Input type='select' id='cat-parent-id' className='p-1'
                                value={input.value.parent && input.value.parent.id || ''}
                                onChange={({ target: { value } }) => {
                                  let categoryp = { ...categories.filter(item => item.id == value)[0] }
                                  let temp = {
                                    parent: categoryp
                                  }

                                  input.onChange(temp)
                                  console.log(temp);
                                }}
                              >
                                <option >---</option>
                                {categories.filter(item => (
                                  input.value.parent && input.value.parent.parent.id ?
                                    item.parentId == input.value.parent.parent.id : false)
                                ).map((item, key) => {
                                  return (
                                    <option key={key} value={item.id}>{item.name_ru}</option>
                                  )
                                })}
                              </Input>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup className="mb-3 p-1">
                            <Label for='cat-id'>Выбранный кузов</Label>
                            <InputGroup className="input-group-alternative">
                              <Input type='select' id='cat-id' className='p-1'
                                value={input.value.id}
                                onChange={({ target: { value } }) => input.onChange({ ...categories.filter(item => item.id == value)[0] })}
                              >
                                <option >---</option>
                                {categories.filter(item => (
                                  item.parent && input.value.parent && input.value.parent.id ?
                                    item.parent.id == input.value.parent.id : false)
                                ).map((item, key) => {
                                  return (
                                    <option key={key} value={item.id}>{item.name_ru} - {item.parent && item.parent.name_ru}</option>
                                  )
                                })}
                              </Input>
                            </InputGroup>
                          </FormGroup>
                        </>)}
                      </Field>
                      <FormGroup className="mb-3 p-1 w-50">
                        <Label for='nput-id'>Комментарий</Label>
                        <InputGroup className="input-group-alternative">
                          <Field name='comment' >
                            {({ input }) => (
                              <Input type='textarea' id='input-id' className='p-1' value={input.value} onChange={input.onChange} />
                            )}
                          </Field>
                        </InputGroup>
                      </FormGroup>

                      <FormGroup className="mb-3 p-1 w-50">
                        <Label for='nput-id'>Статус</Label>
                        <InputGroup className="input-group-alternative">
                          <Field name='status' >
                            {({ input }) => (
                              <>
                                <Input type='select' id='input-id' className='p-1' value={input.value} onChange={input.onChange} >
                                  <option >---</option>
                                  {[
                                    { key: 0, name: 'Новые', value: 'new', class: 'new-order' },
                                    { key: 10, name: 'Arriving', value: 'arriving', class: 'new-order' },
                                    { key: 110, name: 'Arrived', value: 'arrived', class: 'new-order' },
                                    { key: 1, name: 'Принятые', value: 'accepted', class: 'accepted-order' },
                                    { key: 2, name: 'Выполняются', value: 'on_the_way', class: 'on_the_way-order' },
                                    { key: 12, name: 'Paused', value: 'paused', class: 'on_the_way-order' },
                                    { key: 12, name: 'Delivered', value: 'delivered', class: 'on_the_way-order' },
                                    { key: 3, name: 'Завершенные', value: 'completed', class: 'completed-order' },
                                    { key: 4, name: 'Закрытые', value: 'closed', class: 'closed-order' },
                                    { key: 5, name: 'Отмененные', value: 'cancel', class: 'canceled-order' },
                                    { key: 6, name: 'Все' },
                                  ].map((item, key) => {
                                    return (
                                      <option value={item.value}>{item.name}</option>
                                    )
                                  })
                                  }
                                </Input>
                              </>
                            )}
                          </Field>
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
                    <OrdersUploaderInput push={push} pop={pop} />
                    {/* <Jumbotron className='bg-white img-center'>
                                        <img src={require('../../assets/img/addFiles.png')} />
                                        </Jumbotron> */}
                  </Card>
                  <Card className='p-3'>
                    <h4 className='title font-weight-bold text-primary text-uppercase'>
                      {title || 'маршрут на карте'}
                    </h4>
                    <Field name='coors' >
                      {({ input }) => (
                        <MapSelectInput values={values} onChange={input.onChange} value={input.value} />
                      )}
                    </Field>
                  </Card>
                </Col>
                {/* {JSON.stringify(values.fromAddress)} */}
              </Row>
            </form>
          )
        } />
    </div>
  );
})
