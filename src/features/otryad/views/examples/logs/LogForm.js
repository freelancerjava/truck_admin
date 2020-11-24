import React, { useEffect, useState } from 'react'
import { Field, Form } from 'react-final-form'
import { Button, Col, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap'
import moment from 'moment'
import { addDays } from 'date-fns';
import DatePicker from "react-datepicker";
import MapInput from '../../../extrafunc/MapInput';
import { createLog, getLogByGq } from '../../../query/logs';
import { useMutation, useQuery } from 'react-query';

function LogForm({ editingLogId, user, log, logdata, newLogToggle }) {

    // const [log, setlog] = useState({})

    // const logdata = useQuery(["log", { date: moment().format("YYYY-MM-DD"), id: user.command.id }], getLogByGq)

    const [logMut, logMutRes] = useMutation(createLog, {
        onSuccess: () => {
            logdata.refetch()
        }
    })

    // useEffect(() => {
    //     if (logdata.data && logdata.data.logs != null) {
    //         setlog(logdata.data.logs[0])
    //     } else {
    //         setlog({})
    //     }
    // }, [logdata.data]);

    const onSubmit = (data) => {
        let temp = { ...data }
        temp.date = moment().format("YYYY-MM-DD")
        temp.command = user.command.id

        logMut(temp)
        // console.log(temp);
        // console.log(repMutRes);
        newLogToggle()
    }
    return (
        <Form
            onSubmit={onSubmit}
            initialValues={{
                ...log,
                start: new Date(),
                end: new Date(),
                position: log && log.position || { name: null, pos: { lat: null, lng: null } }
            }}
            render={({ handleSubmit, submitError, values, form }) => (
                <form onSubmit={handleSubmit} className="form">
                    {submitError && <div className="text-red text-center">{submitError}</div>}
                    <Row>
                        <Col>
                            <FormGroup className="mb-3">
                                <InputGroup className="input-group-alternative">
                                    <Field name="head">
                                        {props => (
                                            <Input placeholder="Старший группы" type="text"
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
                                    <Field name="count_ls">
                                        {props => (
                                            <Input placeholder="Количество л/с" type="number"
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
                                    <Field name="start">
                                        {props => (
                                            <DatePicker
                                                name={props.input.name}
                                                value={props.input.value}
                                                onChange={props.input.onChange}
                                                selected={props.input.value}
                                                dateFormat="dd-MM-yyyy"
                                                minDate={addDays(new Date(moment().format('MMM DD, YYYYY')), 0)}
                                                customInput={<Input />}
                                            />
                                        )}
                                    </Field>
                                </InputGroup>
                            </FormGroup>

                            <FormGroup className="mb-3 top-z-199">
                                <InputGroup className="input-group-alternative">
                                    <Field name="end">
                                        {props => (
                                            <DatePicker
                                                name={props.input.name}
                                                value={props.input.value}
                                                onChange={props.input.onChange}
                                                selected={props.input.value}
                                                dateFormat="dd-MM-yyyy"
                                                minDate={addDays(new Date(moment().format('MMM DD, YYYYY')), 0)}
                                                customInput={<Input />}
                                            />
                                        )}
                                    </Field>
                                </InputGroup>
                            </FormGroup>

                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Field name="position">
                                {props => (
                                    <MapInput
                                        name={props.input.name}
                                        value={props.input.value}
                                        onChange={props.input.onChange} />
                                )}
                            </Field>
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
                    <Row>
                        <Col>
                            <div className="float-right">
                                <Button color="default" onClick={() => { form.reset() }}>Сбросить</Button>
                                <Button color="primary" disabled={editingLogId == null ? null : "disabled"} onClick={() => { handleSubmit(values) }}>Сохранить</Button>
                            </div>
                        </Col>
                    </Row>



                </form>)}
        />
    )
}

export default LogForm
