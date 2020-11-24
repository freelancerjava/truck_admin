
import React, { useEffect } from "react";
import { Form, Field } from 'react-final-form'

import { useMutation } from 'react-query';
import { loginAction } from '../../query';

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
import { isValidEmail } from "../../extrafunc";
import { FORM_ERROR } from "final-form";

const Login = ({ history }) => {

  // localStorage.removeItem('jwt')
  useEffect(() => {
    document.title = 'Network - Signin';
    localStorage.removeItem('jwt')
    localStorage.removeItem('user')
 }, [])

  const [loginMut, login] = useMutation(loginAction);

  const onSubmit = async (data) => {
    const res = await loginMut(data);
    if (res) {
      if (!window.location.origin.includes('localhost')) {
        // await notifyMut();
      }
      history.push('/otryad/index');
    }
    if (!res) {
      console.log(res, "flag")
      return {
        [FORM_ERROR]: 'Email or password incorrect'
      }
    } else if (data.remember) {
      localStorage.setItem('remember_me', JSON.stringify(data.remember));
    } else { localStorage.removeItem('remember_me') }
  }

  const validate = (val) => {
    const err = {}
    if (!val.email) { err.email = 'Required' }
    if (!isValidEmail(val.email)) { err.email = 'Invalid e-mail address' }
    if (!val.password) { err.password = 'Required' }
    return err
  }

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Sign in with</small>
            </div>
            <div className="btn-wrapper text-center">
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={require("../../assets/img/icons/common/github.svg")}
                  />
                </span>
                <span className="btn-inner--text">Github</span>
              </Button>
              <Button
                className="btn-neutral btn-icon"
                color="default"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={require("../../assets/img/icons/common/google.svg")}
                  />
                </span>
                <span className="btn-inner--text">Google</span>
              </Button>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Or sign in with credentials</small>
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
                          <Input placeholder="Email" type="email" autoComplete="new-email"
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
                          <Input placeholder="Password" type="password" autoComplete="new-password"
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
                      <span className="text-muted">Remember me</span>
                    </label>
                  </div>
                  <div className="text-center">
                    <Button className="my-4" color="primary" type="button" onClick={() => handleSubmit(values)}>
                      Sign in
                  </Button>
                  </div>
                </form>
              )}
            />
          </CardBody>
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <small>Forgot password?</small>
            </a>
          </Col>
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
}

export default withRouter(Login);
