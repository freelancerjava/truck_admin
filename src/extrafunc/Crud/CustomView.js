import React, { useEffect, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { CustomInput as CInput, Button, Media, Card, CardBody, CardFooter, CardHeader, Col, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Row, Label, Progress } from "reactstrap";
import { useMutation, useQuery } from 'react-query';
import { CardTitle } from 'reactstrap';
import moment from 'moment'

import './crud_style.less'
import { withRouter } from 'react-router-dom';

import { strapi, myAxios, user } from '../../axios';
import { onFileUpload } from '../../axios/query';
import ViewNav from '../../features/elements/ViewNav';
import ModerationModal from './ModerationModal';
import FileUploader from './FileUploader';
import arrayMutators from 'final-form-arrays'
import ReactImgCrop from '../ReactImgCrop';



const CustomView = ({ moderation, history, query_key, query_fn, fields, mut_update_fn, id, mut_create_fn, title, parentNav, array_fields, edit_link }) => {

    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const [imageFile, setImageFile] = useState(null)
    const [selectedFile, setSelectedFile] = useState(null)
    const [fileUploadProgress, setFileUploadProgress] = useState(0)

    const querydata = useQuery([query_key, { id: id }], query_fn)

    useEffect(() => {
        if (querydata.data) {
            setData(querydata.data)
        } else {
            setData({})
        }
    }, [querydata.data]);



    return (
        <Card>
            <CardHeader className='d-flex justify-content-between align-items-center'>
                <CardTitle tag='h5' className='mb-0'>
                    <Button color='white' className='shadow-hover' size='sm'
                        onClick={() => {
                            history.goBack()
                        }}>
                        <i className='fa fa-angle-left' />
                    </Button>
                    {id == null ? 'Просмотр' : 'Просмотр'}
                    <ViewNav
                        title={title || ''}
                        parentNav={parentNav || {
                            url: '/admin/orders/index',
                            title: ''
                        }}
                        edit_link={edit_link}
                        id={id}
                    />
                </CardTitle>

                {moderation == true ? <ModerationModal history={history} id={id} mut_query={mut_update_fn} /> : null}

            </CardHeader>

            <CardBody>

                {array_fields ? <>
                    {/* {console.log(fields)} */}

                    {fields.map((rows, key) => {
                        return (<Row>
                            {
                                rows.map((cols, key) => {
                                    return (<Col>
                                        {
                                            cols.map((inner_fields, key) => {
                                                return (
                                                    <CustomViewField item={inner_fields} header={inner_fields} key={key} data={data} />
                                                )
                                            })
                                        }
                                    </Col>)
                                })
                            }
                        </Row>)
                    })}
                </>
                    : <Row>
                        <Col lg='6'>
                            {fields.map((item, key) => {
                                return (
                                    <CustomViewField item={item} header={item} key={key} data={data} />
                                )
                            })}
                        </Col>
                    </Row>}
            </CardBody >
            <CardFooter>
            </CardFooter>
        </Card >
    );




}

export default withRouter(CustomView);


const CustomViewField = ({ item, header, key, data }) => {
    // if (header.date) {
    //     return (
    //         <span key={key} scope="col">
    //             {moment(item[header.key]).format('DD.MM.YYYY')}
    //         </span>
    //     )
    // } else if (header.datentime) {
    //     return (
    //         <span key={key} scope="col">
    //             {moment(item[header.key]).format('DD.MM.YYYY')} в {moment(item[header.key]).format('hh:mm')}
    //         </span>
    //     )
    // } else if (header.time) {
    //     // console.log(header.keys[0]);

    //     let tditem = [
    //         <div>
    //             {item[header.keys[0]] && item[header.keys[1]]
    //                 ? moment(item[header.keys[1]]).diff(moment(item[header.keys[0]]), 'hours')
    //                 : '0'} часов
    //             </div>
    //     ]
    //     {
    //         header.keys.map((keyItem) => {
    //             tditem.push(<div>{getProp(item, keyItem) && moment(getProp(item, keyItem)).format('DD.MM.YYYY') || header.def_val}</div>)
    //         })
    //     }
    //     return (
    //         <span key={key} scope="col">
    //             {tditem}
    //         </span>
    //     )
    // } else if (header.media) {
    //     return (
    //         <span key={key} scope="col">
    //             <Media className="align-items-center">
    //                 <a
    //                     className="avatar rounded mr-3"
    //                     href="#pablo"
    //                     onClick={e => e.preventDefault()}
    //                 >
    //                     <img
    //                         alt={header.key}
    //                         src={getProp(item, header.key) || require("../../assets/img/tempfile.png")}
    //                     />
    //                 </a>
    //                 <Media>
    //                     <span className="mb-0 text-sm">
    //                         {/* {"url"} */}
    //                     </span>
    //                 </Media>
    //             </Media>
    //         </span>
    //     )
    // } else if (header.keys) {
    //     let tditem = []
    //     {
    //         header.keys.map((keyItem) => {
    //             tditem.push(<div className='mr-1'>{getProp(item, keyItem) || header.def_val}</div>)
    //         })
    //     }
    //     return (
    //         <span key={key} scope="col">
    //             <div className='d-flex flex-wrap'>{tditem}</div>
    //         </span>
    //     )
    // } else 
    if (header.key) {
        return (
            <div>
                <h3 className='text-muted'>{header.name}:</h3>
                <h2 key={key} scope="col">{data[header.key]}</h2>
                {/* <span key={key} scope="col">{getProp(item, header.key) || header.def_val}</span> */}
            </div>
        )
    }

}

const getProp = (object, props) => {
    const arrprop = props.split('.')

    let prop = object
    arrprop.map(item => {
        if (prop == null) return 'не присвоено!'
        prop = prop[item]
    })
    // if(prop == 1) return '1'
    if (prop === true) return 'true'
    if (prop === false) return 'false'
    return prop
}