import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form'

import { useMutation } from 'react-query';
import { loginAction } from './query';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  // Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
import { withRouter } from "react-router-dom";
// import { isValidEmail } from "../../extrafunc";
import { FORM_ERROR } from "final-form";

export default withRouter(function Login({ history }) {
  useEffect(() => {
    document.title = 'Network - Signin';
    localStorage.removeItem('jwt')
    localStorage.removeItem('user')
  }, [])

  const [loginMut, login] = useMutation(loginAction);

  const onSubmit = async (data) => {
    const res = await loginMut(data);
    if (res && res.id) {
      if (!window.location.origin.includes('localhost')) {
        // await notifyMut();
      }
      history.push('/admin/index');
    }
    if (res == null || res.id == null) {
      console.log(res, "flag")
      return {
        [FORM_ERROR]: 'Невалидные данные аккаунта!'
      }
    } else if (data.remember) {
      localStorage.setItem('remember_me', JSON.stringify(data.remember));
    } else { localStorage.removeItem('remember_me') }
  }

  const validate = (val) => {
    const err = {}
    if (!val.email) { err.email = 'Required' }
    // if (!isValidEmail(val.email)) { err.email = 'Invalid e-mail address' }
    if (!val.password) { err.password = 'Required' }
    return err
  }

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Введите данные аккаунта</small>
            </div>
            <Form
              onSubmit={onSubmit}
              validate={validate}
              initialValues={{
                // email: "asd@asd.ads",
                // password: "ads",
              }}
              render={({ handleSubmit, submitError, values }) => (
                <form onSubmit={handleSubmit} className="form">
                  {submitError && <div className="text-red text-center">{submitError}</div>}
                  <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Field name="email">
                        {props => (
                          <Input placeholder="Почта" type="email" autoComplete="new-email"
                            name={props.input.name}
                            value={props.input.value}
                            onChange={props.input.onChange}
                          />
                        )}
                      </Field>
                    </InputGroup>
                  </FormGroup>
                  <FormGroup>
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-lock-circle-open" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Field name="password">
                        {props => (
                          <Input placeholder="Пароль" type="password" autoComplete="new-password"
                            name={props.input.name}
                            value={props.input.value}
                            onChange={props.input.onChange}
                          />
                        )}
                      </Field>
                    </InputGroup>
                  </FormGroup>
                  <div className="custom-control custom-control-alternative custom-checkbox">
                    <Field name="remember" type="checkbox">
                      {props => (
                        <input
                          onChange={props.input.onChange}
                          className="custom-control-input"
                          id=" customCheckLogin"
                          type="checkbox"
                          name={props.input.name}
                          value={props.input.value}
                          onChange={props.input.onChange}
                        />)}
                    </Field>
                    <label
                      className="custom-control-label"
                      htmlFor=" customCheckLogin"
                    >
                      <span className="text-muted">Запомнить</span>
                    </label>
                  </div>
                  <div className="text-center">
                    <Button className="my-4" color="primary" type="button" onClick={() => handleSubmit(values)}>
                      Вход
                  </Button>
                  </div>
                </form>
              )}
            />
          </CardBody>
        </Card>
      </Col>
    </>
  ); 
})

