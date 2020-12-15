import React, { useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Row, CardTitle, Label } from "reactstrap";
import { useMutation, useQuery } from 'react-query';
import { withRouter } from 'react-router-dom';


const NewForm = ({ history, mut_create_fn, fields }) => {

    const [mutCreate, mutCreateRes] = useMutation(mut_create_fn, {
        onSuccess: () => {
            history.goBack()
        }
    })

    const CustomInput = ({ type, ...props }) => {
        if (type.name === 'text') {
            return (
                <Input {...props} type={type.name} />
            )
        } else if (type.name === 'select') {
            return (
                <Input {...props} type={type.name}>
                    <option />
                    {type.options.map((item, key) => {
                        return (
                            <option key={key} value={item[type.value_field]}>{item[type.name_field]}</option>
                        )
                    })}
                </Input>
            )
        } else if (type.name === 'file') {
            return (<>
                <Input
                    {...props}
                    type={type.name}
                // value={imageFile}
                // onChange={(e) => {
                //     console.log("asasa", e);

                //     setImageFile(URL.createObjectURL(e.target.files[0]))
                // }}
                />
                {/* <img src={imageFile} /> */}
            </>
            )
        }
    }

    const onSubmit = (data) => {
        mutCreate({ body: data })
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle tag='h5' className='mb-0'>
                    Создание
              </CardTitle>
            </CardHeader>

            <CardBody>
                <Form
                    onSubmit={onSubmit}
                    // validate={validate}
                    initialValues={{
                    }}
                    render={({ handleSubmit, submitError, values }) => (
                        <form onSubmit={handleSubmit} className="form">
                            {submitError && <div className="text-red text-center">{submitError}</div>}
                            <Row>
                                <Col>
                                    {fields.map((item, key) => {
                                        return (
                                            <FormGroup key={key} className="mb-3">
                                                <Label for={`${item.name}_id`}>{item.name}</Label>
                                                <InputGroup className="input-group-alternative">
                                                    <Field name={item.key}>
                                                        {props => (
                                                            <CustomInput placeholder={item.key} type={item.type}
                                                                name={props.input.name}
                                                                value={props.input.value}
                                                                onChange={props.input.onChange}
                                                                id={`${item.key}_id`}
                                                            />
                                                        )}
                                                    </Field>
                                                </InputGroup>
                                            </FormGroup>
                                        )
                                    })}
                                </Col>
                            </Row>

                            <Row>
                                <Col className="justify-content-end d-flex">
                                    <FormGroup>
                                        <InputGroup>
                                            <Button
                                                color="info"
                                                className="rounded-0 shadow-none border-0"
                                                onClick={e => {
                                                    e.preventDefault()
                                                    handleSubmit(values)
                                                }}
                                            >Создать</Button>
                                        </InputGroup>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </form>
                    )
                    } />
            </CardBody >
        </Card >
    );
}

export default withRouter(NewForm);