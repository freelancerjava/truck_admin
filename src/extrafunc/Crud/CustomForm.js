import React, { useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { CustomInput as CInput, Button, Card, CardBody, CardFooter, CardHeader, Col, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Label } from "reactstrap";
import { useMutation, useQuery } from 'react-query';
import { CardTitle } from 'reactstrap';

import './crud_style.less'
import { withRouter } from 'react-router-dom';

import { strapi, myAxios } from '../../axios';
import { onFileUpload } from '../../axios/query';


const CustomForm = ({ history, query_key, query_fn, fields, mut_update_fn, id, mut_create_fn }) => {




    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const [imageFile, setImageFile] = useState(null)
    const [selectedFile, setSelectedFile] = useState(null)

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


    const [mutFileUpload, mutFileUploadRes] = useMutation(onFileUpload, {
        onMutate: () => {
            setLoading(true)
        },
        onSuccess: () => {
            setLoading(false)
        }
    })

    const onFileUpload1 = async (values, field, selectedFile) => {

        const formData = new FormData();
        formData.append(
            "file",
            selectedFile,
            // selectedFile.name
        );
        // console.log(selectedFile);
        // console.log(values);
        // console.log(field);
        const token = JSON.parse(localStorage.getItem('user')).id
        const data = await myAxios.post(`admins/file?access_token=${token}&folder=upload`, formData,
            {
                onUploadProgress: ProgressEvent => {
                    console.log('progress: ', (ProgressEvent.loaded / ProgressEvent.total * 100));
                },
            });
        console.log("data", data.data.result);

        values[field] = data.data.result

        console.log(values);

    }

    const onSubmit = (values) => {
        let temp = { ...values }
        fields.map((item, key) => {
            if (!temp[item.key]) {
                if (item.proptype == 'bool') {
                    temp[item.key] = false
                } else if (item.proptype == 'number') {
                    temp[item.key] = 0
                } else {
                    temp[item.key] = null
                }
            }
        })
        // temp.date = moment().format("YYYY-MM-DD")
        // // temp.user = user.id
        // temp.command = user.command.id
        // // temp.file = 1

        if (data == null) mutCreate({ body: temp }); else
            mutUpdate({ id: id, body: temp })
        console.log(temp);
        // repMutRes.onSuccess(repdata.refetch())
    }

    const onFileChange = event => {
        setSelectedFile(event.target.files[0]);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle tag='h5' className='mb-0'>
                    {id == null ? 'Создание' : 'Редактирование'}
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
                                                    <CustomInput loading={loading} item={item} onFileChange={onFileChange} onFileUpload={onFileUpload1} values={values} selectedFile={selectedFile} />
                                                </InputGroup>
                                            </FormGroup>
                                        )
                                    })}
                                </Col>
                            </Row>

                            <Row>
                                <Col className="justify-content-end d-flex">
                                    {loading ? <i className='fa fa-spinner fa-spin' /> :
                                        <FormGroup>
                                            <InputGroup>
                                                <Button
                                                    color="primary"
                                                    size='sm'
                                                    onClick={e => {
                                                        e.preventDefault()
                                                        form.reset()
                                                    }}
                                                >Сбросить</Button>
                                                <Button
                                                    color="primary"
                                                    size='sm'
                                                    onClick={e => {
                                                        e.preventDefault()
                                                        handleSubmit(values)
                                                    }}
                                                >
                                                    {id == null ? 'Создать' : 'Обновить'}
                                                </Button>
                                            </InputGroup>
                                        </FormGroup>}
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


const CustomInput = ({ item, onFileChange, onFileUpload, values, selectedFile, loading }) => {
    if (item.type.name === 'text') {
        return (<Field name={item.key}>
            {props => (
                <Input
                    placeholder={item.name}
                    type={item.type.name}
                    name={props.input.name}
                    value={props.input.value}
                    onChange={props.input.onChange}
                    id={`${item.key}_id`}
                />)}
        </Field>
        )
    } else if (item.type.name === 'checkbox') {
        return (<Field name={item.key} component='input' type='checkbox' />
        )
    } else if (item.type.name === 'select') {
        return (<Field name={item.key}>
            {props => (
                <Input
                    placeholder={item.name}
                    type={item.type.name}
                    name={props.input.name}
                    value={props.input.value}
                    onChange={props.input.onChange}
                    id={`${item.key}_id`}
                >
                    <option placeholder={props.placeholder}>{props.placeholder}</option>
                    {item.type.options.map((opt_item, key) => {
                        return (
                            <option key={key} value={opt_item[item.type.value_field]}>{opt_item[item.type.name_field]}</option>
                        )
                    })}
                </Input>)}
        </Field>
        )
    } else if (item.type.name === 'file') {
        return (<>
            <div className='file-prev-cont w-100'>
                {/* <Field name={item.key}>
                    {props => ( */}
                <>
                    <img src={values[item.key]} className='file_prev' />
                    <div className='d-flex align-items-center justify-content-space-between'>
                        <Input type='file' onChange={onFileChange} />
                        {loading ? <i className='fa fa-spinner fa-spin' /> :
                            <Button onClick={(e) => {
                                e.preventDefault();
                                onFileUpload(values, item.key, selectedFile)
                            }}>Загрузить</Button>
                        }
                    </div>
                </>
                {/* )}
                </Field> */}
            </div>

        </>)
    } else {
        return (<Field name={item.key}>
            {props => (<Input
                placeholder={item.name}
                type={item.type.name}
                name={props.input.name}
                value={props.input.value}
                onChange={props.input.onChange}
                id={`${item.key}_id`}
            />
            )}
        </Field>)
    }
}