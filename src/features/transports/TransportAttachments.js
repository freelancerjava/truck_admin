import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody } from 'reactstrap';
import CarouselRS from '../../extrafunc/CarouselRS';
import ImageShow from '../../extrafunc/ImageShow';

const TransportAttachments = ({ transport }) => {
    return (
        <div>
            <Card className='mb-3'>
                <CardBody>
                    <h4 className='title font-weight-bold text-primary text-uppercase'>
                        Фото техники
                    </h4>
                    <div className='attachments'>

                        {transport.attachment && transport.attachment
                            ? <CarouselRS show_type={true} data={
                                transport && [
                                    {
                                        data: {
                                            result: transport.attachment.transport1 && transport.attachment.transport1.result || require('../../assets/img/tempfile.png')
                                        }
                                    },
                                    {
                                        data: {
                                            result: transport.attachment.transport2 && transport.attachment.transport2.result || require('../../assets/img/tempfile.png')
                                        }
                                    },
                                    {
                                        data: {
                                            result: transport.attachment.transport3 && transport.attachment.transport3.result || require('../../assets/img/tempfile.png')
                                        }
                                    },
                                    {
                                        data: {
                                            result: transport.attachment.transport4 && transport.attachment.transport4.result || require('../../assets/img/tempfile.png')
                                        }
                                    },
                                    // {
                                    //     data: {
                                    //         result: transport.attachment.transport_register1 && transport.attachment.transport_register1.result || require('../../assets/img/tempfile.png')
                                    //     }
                                    // },
                                    // {
                                    //     data: {
                                    //         result: transport.attachment.transport_register2 && transport.attachment.transport_register2.result || require('../../assets/img/tempfile.png')
                                    //     }
                                    // },
                                    // {
                                    //     data: {
                                    //         result: transport.attachment.authorization1 && transport.attachment.authorization1.result || require('../../assets/img/tempfile.png')
                                    //     }
                                    // },
                                    // {
                                    //     data: {
                                    //         result: transport.attachment.authorization2 && transport.attachment.authorization2.result || require('../../assets/img/tempfile.png')
                                    //     }
                                    // }
                                ]
                            } />
                            : <div>
                                <img src={require('../../assets/img/tempfile.png')} />
                            </div>}
                    </div>
                </CardBody>
            </Card>

            <Card className='mb-3'>
                <CardBody>
                    <h4 className='title font-weight-bold text-primary text-uppercase'>
                        Свидетельство о регистрации транспортного средства
                    </h4>
                    <div className='docs'>
                        <div className='doc'>
                            <div className='doc-title'>
                                Фото свидетельства
                            </div>
                            <div className='doc-img'>
                                <i className='fa fa-check-circle' />
                                <ImageShow image={{
                                    url: transport.attachment && transport.attachment.transport_register1
                                        && transport.attachment.transport_register1.result
                                        || require('../../assets/img/tempfile.png')
                                }} />
                            </div>
                            <div>
                                <i className='text-success'>Проверено</i>
                            </div>
                        </div>
                        <div className='doc'>
                            <div className='doc-title'>
                                Фото свидетельства
                            </div>
                            <div className='doc-img'>
                                <i className='fa fa-check-circle' />
                                <ImageShow image={{
                                    url: transport.attachment && transport.attachment.transport_register2
                                        && transport.attachment.transport_register2.result
                                        || require('../../assets/img/tempfile.png')
                                }} />
                            </div>
                            <div>
                                <i className='text-success'>Проверено</i>
                            </div>
                        </div>

                    </div>
                </CardBody>
            </Card>

            <Card className='mb-3'>
                <CardBody>
                    <h4 className='title font-weight-bold text-primary text-uppercase'>
                        Пасспорт транспортного средства
                    </h4>
                    <div className='docs'>
                        <div className='doc'>
                            <div className='doc-title'>
                                Фото пасспорта
                            </div>
                            <div className='doc-img'>
                                <i className='fa fa-check-circle' />
                                <ImageShow image={{
                                    url: transport.attachment && transport.attachment.transport1
                                        && transport.attachment.transport1.result
                                        || require('../../assets/img/tempfile.png')
                                }} />
                            </div>
                            <div>
                                <i className='text-success'>Проверено</i>
                            </div>
                        </div>
                        <div className='doc'>
                            <div className='doc-title'>
                                Фото пасспорта
                            </div>
                            <div className='doc-img'>
                                <i className='fa fa-check-circle' />
                                <ImageShow image={{
                                    url: transport.attachment && transport.attachment.transport2
                                        && transport.attachment.transport2.result
                                        || require('../../assets/img/tempfile.png')
                                }} />
                            </div>
                            <div>
                                <i className='text-success'>Проверено</i>
                            </div>
                        </div>

                    </div>
                </CardBody>
            </Card>

            <Card className='mb-3'>
                <CardBody>
                    <h4 className='title font-weight-bold text-primary text-uppercase'>
                        ДКП транспортного средства
                    </h4>
                    <div className='docs'>
                        <div className='doc'>
                            <div className='doc-title'>
                                Фото пасспорта
                            </div>
                            <div className='doc-img'>
                                <i className='fa fa-check-circle' />
                                <ImageShow image={{
                                    url: transport.attachment && transport.attachment.transport1
                                        && transport.attachment.transport1.result
                                        || require('../../assets/img/tempfile.png')
                                }} />
                            </div>
                            <div>
                                <i className='text-success'>Проверено</i>
                            </div>
                        </div>
                        <div className='doc'>
                            <div className='doc-title'>
                                Фото пасспорта
                            </div>
                            <div className='doc-img'>
                                <i className='fa fa-check-circle' />
                                <ImageShow image={{
                                    url: transport.attachment && transport.attachment.transport1
                                        && transport.attachment.transport1.result
                                        || require('../../assets/img/tempfile.png')
                                }} />
                            </div>
                            <div>
                                <i className='text-success'>Проверено</i>
                            </div>
                        </div>

                    </div>
                </CardBody>
            </Card>

            <Card className='mb-3'>
                <CardBody>
                    <h4 className='title font-weight-bold text-primary text-uppercase'>
                        ТО транспортного средства
                    </h4>
                    <div className='docs'>
                        <div className='doc'>
                            <div className='doc-title'>
                                Фото пасспорта
                            </div>
                            <div className='doc-img'>
                                <i className='fa fa-check-circle' />
                                <ImageShow image={{
                                    url: transport.attachment && transport.attachment.transport1
                                        && transport.attachment.transport1.result
                                        || require('../../assets/img/tempfile.png')
                                }} />
                            </div>
                            <div>
                                <i className='text-success'>Проверено</i>
                            </div>
                        </div>
                        <div className='doc'>
                            <div className='doc-title'>
                                Фото пасспорта
                            </div>
                            <div className='doc-img'>
                                <i className='fa fa-check-circle' />
                                <ImageShow image={{
                                    url: transport.attachment && transport.attachment.transport1
                                        && transport.attachment.transport1.result
                                        || require('../../assets/img/tempfile.png')
                                }} />
                            </div>
                            <div>
                                <i className='text-success'>Проверено</i>
                            </div>
                        </div>

                    </div>
                </CardBody>
            </Card>

            <Card className='mb-3'>
                <CardBody>
                    <h4 className='title font-weight-bold text-primary text-uppercase'>
                        Страховой полис
                    </h4>
                    <div className='docs'>
                        <div className='doc'>
                            <div className='doc-title'>
                                Фото пасспорта
                            </div>
                            <div className='doc-img'>
                                <i className='fa fa-check-circle' />
                                <ImageShow image={{
                                    url: transport.attachment && transport.attachment.transport1
                                        && transport.attachment.transport1.result
                                        || require('../../assets/img/tempfile.png')
                                }} />
                            </div>
                            <div>
                                <i className='text-success'>Проверено</i>
                            </div>
                        </div>
                        <div className='doc'>
                            <div className='doc-title'>
                                Фото пасспорта
                            </div>
                            <div className='doc-img'>
                                <i className='fa fa-check-circle' />\
                            </div>
                            <div>
                                <i className='text-success'>Проверено</i>
                            </div>
                        </div>

                    </div>
                </CardBody>
            </Card>

            <Card className='mb-3'>
                <CardBody>
                    <h4 className='title font-weight-bold text-primary text-uppercase'>
                        Доверенность
                    </h4>
                    <div className='docs'>
                        <div className='doc'>
                            <div className='doc-title'>
                                Фото пасспорта
                            </div>
                            <div className='doc-img'>
                                <i className='fa fa-check-circle' />
                                <ImageShow image={{
                                    url: transport.attachment && transport.attachment.transport1
                                        && transport.attachment.transport1.result
                                        || require('../../assets/img/tempfile.png')
                                }} />
                            </div>
                            <div>
                                <i className='text-success'>Проверено</i>
                            </div>
                        </div>
                        <div className='doc'>
                            <div className='doc-title'>
                                Фото пасспорта
                            </div>
                            <div className='doc-img'>
                                <ImageShow image={{
                                    url: transport.attachment && transport.attachment.transport1
                                        && transport.attachment.transport1.result
                                        || require('../../assets/img/tempfile.png')
                                }} />
                            </div>
                            <div>
                                <i className='text-success'>Проверено</i>
                            </div>
                        </div>

                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

TransportAttachments.propTypes = {};

export default TransportAttachments;