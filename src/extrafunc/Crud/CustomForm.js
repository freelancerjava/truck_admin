import React, { useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Label } from "reactstrap";
import { useMutation, useQuery } from 'react-query';
import { CardTitle } from 'reactstrap';

import './crud_style.less'
import { withRouter } from 'react-router-dom';


const CustomForm = ({ history, query_key, query_fn, fields, mut_update_fn, id, mut_create_fn }) => {

    


    const [data, setData] = useState({})
    const [imageFile, setImageFile] = useState(null)

    const querydata = useQuery([query_key, { id: id }], query_fn)

    const [mutCreate, mutCreateRes] = useMutation(mut_create_fn, {
        onSuccess: () => {
            history.goBack()
        }
    })

    const [mutUpdate, mutUpdateRes] = useMutation(mut_update_fn, {
        onSuccess: () => {
            history.goBack()
        }
    })

    useEffect(() => {
        if (querydata.data) {
            setData(querydata.data)
        } else {
            setData(null)
        }
    }, [querydata.data]);



    const onSubmit = (values) => {
        let temp = { ...values }
        fields.map((item, key) => {
            if (!temp[item.key]) temp[item.key] = null
        })
        // temp.date = moment().format("YYYY-MM-DD")
        // // temp.user = user.id
        // temp.command = user.command.id
        // // temp.file = 1

        if (data == null) mutCreate({ body: temp }); else
            mutUpdate({ id: id, body: temp })
        // console.log(temp);
        // repMutRes.onSuccess(repdata.refetch())
    }
    return (
        <Card>
            <CardHeader>
                <CardTitle tag='h5' className='mb-0'>
                {id==null ? 'Создание' : 'Редактирование'}
              </CardTitle>
            </CardHeader>

            <CardBody>
                <Form
                    onSubmit={onSubmit}
                    // validate={validate}
                    initialValues={data || {}}
                    render={({ handleSubmit, submitError, values, form }) => (
                        <form onSubmit={handleSubmit} className="form">
                            {submitError && <div className="text-red text-center">{submitError}</div>}
                            <Row>
                                <Col>
                                {/* {JSON.stringify(values)} */}
                                    {fields.map((item, key) => {
                                        return (
                                            <FormGroup key={key} className="mb-3">
                                                <Label for={`${item.key}_id`}>{item.name}</Label>
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
                                                    form.reset()
                                                }}
                                            >Сбросить</Button>
                                            <Button
                                                color="info"
                                                className="rounded-0 shadow-none border-0"
                                                onClick={e => {
                                                    e.preventDefault()
                                                    handleSubmit(values)
                                                }}
                                            >
                                                {id==null ? 'Создать' : 'Обновить'}
                                                </Button>
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

export default withRouter(CustomForm);


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