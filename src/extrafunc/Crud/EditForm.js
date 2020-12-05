import React, { useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { Button, Card, CardBody, CardFooter, CardHeader, Col, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from "reactstrap";
import { useMutation, useQuery } from 'react-query';
import { createReport, getReportByGq, updateReport } from './query';
import { CardTitle} from 'reactstrap';


const EditForm = ({ query_key, query_fn }) => {

    const [data, setData] = useState({})

    const querydata = useQuery([query_key, { id: 1 }], query_fn)

    // const [repMut, repMutRes] = useMutation(createReport, {
    //     onSuccess: () => {
    //         reportdata.refetch()        
    //     }
    // })

    // const [repMutUpdate, repMutUpdateRes] = useMutation(updateReport, {
    //     onSuccess: () => {
    //         reportdata.refetch()
    //     }
    // })

    useEffect(() => {
        if (querydata.data) {
            setData(querydata.data)
        } else {
            setData({})
        }
    }, [querydata.data]);

    // const onSubmit = (data) => {
    //     let temp = { ...data }
    //     temp.date = moment().format("YYYY-MM-DD")
    //     // temp.user = user.id
    //     temp.command = user.command.id
    //     // temp.file = 1

    //     if (report == null) repMut(temp); else repMutUpdate(temp)
    //     // console.log(repMutRes);
    //     // repMutRes.onSuccess(repdata.refetch())
    // }
    return (
        <Card>
            <CardHeader>
              <CardTitle tag='h5' className='mb-0'>
                Редактирование
              </CardTitle>
            </CardHeader>

            <CardBody>
            <Form
                    // onSubmit={onSubmit}
                    // validate={validate}
                    initialValues={{
                        // name: "",
                        // repcat: ""
                        // command: user.command.name
                        // ...report
                    }}
                    render={({ handleSubmit, submitError, values }) => (
                        <form onSubmit={handleSubmit} className="form">
                            {submitError && <div className="text-red text-center">{submitError}</div>}

                            {/* <FormGroup className="mb-3">
                                    <InputGroup className="input-group-alternative">
                                        <Field name="command">
                                            {props => (
                                                <Input placeholder="Подразделение" type="text" disabled
                                                    name={props.input.name}
                                                    value={props.input.value}
                                                    onChange={props.input.onChange}
                                                />
                                            )}
                                        </Field>
                                    </InputGroup>
                                </FormGroup> */}
                            <Row>
                                <Col>
                                    <FormGroup className="mb-3">
                                        <InputGroup className="input-group-alternative">
                                            <Field name="dej">
                                                {props => (
                                                    <Input placeholder="Дежурный по В/Ч" type="text"
                                                        name={props.input.name}
                                                        value={props.input.value}
                                                        onChange={props.input.onChange}
                                                    />
                                                )}
                                            </Field>
                                        </InputGroup>
                                    </FormGroup>

                                    <FormGroup className="mb-3">
                                        <InputGroup className="input-group-alternative">
                                            <Field name="dej_pom">
                                                {props => (
                                                    <Input placeholder="Помощник дежурного по В/Ч" type="text"
                                                        name={props.input.name}
                                                        value={props.input.value}
                                                        onChange={props.input.onChange}
                                                    />
                                                )}
                                            </Field>
                                        </InputGroup>
                                    </FormGroup>

                                    <FormGroup className="mb-3">
                                        <InputGroup className="input-group-alternative">
                                            <Field name="royxat_boyicha">
                                                {props => (
                                                    <Input placeholder="По списку" type="number"
                                                        name={props.input.name}
                                                        value={props.input.value}
                                                        onChange={props.input.onChange}
                                                    />
                                                )}
                                            </Field>
                                        </InputGroup>
                                    </FormGroup>

                                    <FormGroup className="mb-3">
                                        <InputGroup className="input-group-alternative">
                                            <Field name="safda">
                                                {props => (
                                                    <Input placeholder="На лицо" type="number"
                                                        name={props.input.name}
                                                        value={props.input.value}
                                                        onChange={props.input.onChange}
                                                    />
                                                )}
                                            </Field>
                                        </InputGroup>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup className="mb-3">
                                        <InputGroup className="input-group-alternative">
                                            <Field name="safar">
                                                {props => (
                                                    <Input placeholder="Командировка" type="number"
                                                        name={props.input.name}
                                                        value={props.input.value}
                                                        onChange={props.input.onChange}
                                                    />
                                                )}
                                            </Field>
                                        </InputGroup>
                                    </FormGroup>

                                    <FormGroup className="mb-3">
                                        <InputGroup className="input-group-alternative">
                                            <Field name="tatil">
                                                {props => (
                                                    <Input placeholder="Отпуск" type="number"
                                                        name={props.input.name}
                                                        value={props.input.value}
                                                        onChange={props.input.onChange}
                                                    />
                                                )}
                                            </Field>
                                        </InputGroup>
                                    </FormGroup>

                                    <FormGroup className="mb-3">
                                        <InputGroup className="input-group-alternative">
                                            <Field name="gospital">
                                                {props => (
                                                    <Input placeholder="Госпиталь" type="number"
                                                        name={props.input.name}
                                                        value={props.input.value}
                                                        onChange={props.input.onChange}
                                                    />
                                                )}
                                            </Field>
                                        </InputGroup>
                                    </FormGroup>

                                    <FormGroup className="mb-3">
                                        <InputGroup className="input-group-alternative">
                                            <Field name="uy_karantin">
                                                {props => (
                                                    <Input placeholder="Домашний карантин" type="number"
                                                        name={props.input.name}
                                                        value={props.input.value}
                                                        onChange={props.input.onChange}
                                                    />
                                                )}
                                            </Field>
                                        </InputGroup>
                                    </FormGroup>
                                </Col>
                            </Row>

                            {/* <FormGroup>
                                    <InputGroup>
                                        <Field name="repcat">
                                            {props => (
                                                <Input type="select"
                                                    name={props.input.name}
                                                    value={props.input.value}
                                                    onChange={props.input.onChange}
                                                >
                                                    <option>Выберите категорию</option>
                                                    {repcat.map((item) => {
                                                        return (
                                                            <option value={item.id}>{item.name}</option>
                                                        )
                                                    })}
                                                </Input>
                                            )}
                                        </Field>
                                    </InputGroup>
                                </FormGroup> */}
                            {/* <FormGroup>
                                    <InputGroup>
                                        <Field name="file">
                                            {props =    
                                                <>
                                                    <div class="custom-file">
                                                        <Input type="file"
                                                            class="custom-file-input" id="inputGroupFile01"
                                                            name={props.input.name}
                                                            value={props.input.value}
                                                            onChange={props.input.onChange}
                                                        />
                                                        <label class="custom-file-label" for="inputGroupFile01">Выбрать файл</label>
                                                    </div>
                                                </>
                                            )}
                                        </Field>
                                    </InputGroup>
                                </FormGroup> */}
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
                                            >{(report == null) ? "Загрузить расход" : "Обновить"}</Button>
                                            <InputGroupAddon addonType="append">
                                                <InputGroupText className="bg-info text-white shadow-none border-0">
                                                    {(repMutRes.status === 'loading' || repMutUpdateRes.status === 'loading') ? <i className="fa fa-spinner spin " /> :
                                                        (repMutRes.status === 'success' || repMutUpdateRes.status === 'success') ? <i className="fa fa-check" /> :
                                                            (repMutRes.status === 'error' || repMutUpdateRes.status === 'error') ? <i className="fa fa-times" /> : <><i className="fa fa-paper-plane" /></>}
                                                </InputGroupText>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormGroup>
                                </Col>
                            </Row>

                        </form>)}
                />
            </CardBody>
          </Card>
    );
}

export default EditForm;