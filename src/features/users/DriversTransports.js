import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Row, Col, CardTitle } from 'reactstrap';
import { getTransports } from '../transports/query';
import { useQuery } from 'react-query';
import CarouselRS from '../../extrafunc/CarouselRS';
import { DragSwitch } from 'react-dragswitch';
import ImageShow from '../../extrafunc/ImageShow';

const DriversTransports = ({ accData = { driverId: 4 } }) => {
    const [transports, setTransports] = useState([])
    const filter = JSON.stringify({ where: { driverId: accData.id }, include: [{ category: ['rootCategory', { parent: ['parent'] }] }, 'driver', 'model', 'make'] })
    const transportData = useQuery(['transport', { filter: filter }], getTransports)

    useEffect(() => {
        let cancel = false
        if (!cancel) {
            if (transportData.data) {
                setTransports(transportData.data)
            } else {
                setTransports([])
            }
            cancel = true
        }
    }, [transportData.data])
    return (
        <>
            {transports.map((item, key) => {
                const expanded = key == 0 ? true : false
                return (<TransportViewCard accData={accData} transport={item} expanded={expanded} />)
            })}
        </>
    );
};

DriversTransports.propTypes = {};

export default DriversTransports;

const TransportViewCard = ({ accData, transport = {}, expanded = false }) => {
    const [open, setopen] = useState(expanded);
    return (
        <Card className='mb-3'>
            <div className='d-flex justify-content-between align-items-center'
                onClick={() => { setopen(!open) }}>
                <CardTitle tag='h2' className='ml-3 mt-3 mb-3 font-weight-bold text-primary text-uppercase'>
                    {transport.name || transport.gos_number || 'Без наименования и номера'}
                </CardTitle>
                <i className={`mr-3 fa ${open ? 'fa-angle-up' : 'fa-angle-down'}`} />
            </div>
            {open && <CardBody className='p-3'>
                <Row>
                    <Col>
                        <Card className='mb-3 bordered'>
                            <CardBody>
                                <h4 className='title font-weight-bold text-primary text-uppercase'>
                                    Общие сведения
                                    </h4>
                                <div className='d-flex justify-content-between mb-1'>
                                    <span className='text-muted'><small>Категория техники</small></span>
                                    <span className='text-dark h5'>{accData.type || 'Нет'}</span>
                                </div>
                                <div className='d-flex justify-content-between mb-1'>
                                    <span className='text-muted'><small>Марка техники</small></span>
                                    <span className='text-dark h5'>{accData.category && accData.category.name_ru || 'Нет'}</span>
                                </div>
                                <div className='d-flex justify-content-between mb-1'>
                                    <span className='text-muted'><small>Модель техники</small></span>
                                    <span className='text-dark h5'>{accData.category && accData.category.name_ru || 'Нет'}</span>
                                </div>
                                <div className='d-flex justify-content-between mb-1'>
                                    <span className='text-muted'><small>Гос. номер техники</small></span>
                                    <span className='text-dark h5'>{accData.category && accData.category.name_ru || 'Нет'}</span>
                                </div>
                                <div className='d-flex justify-content-between mb-1'>
                                    <span className='text-muted'><small>Год выпуска техники</small></span>
                                    <span className='text-dark h5'>{accData.category && accData.category.name_ru || 'Нет'}</span>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card className='mb-3 bordered'>
                            <CardBody>
                                <h4 className='title font-weight-bold text-primary text-uppercase'>
                                    Фото техники
                                </h4>
                                <div className='attachments'>

                                    {transport.attachment && transport.attachment
                                        ? <CarouselRS data={
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
                    </Col>
                    <Col>
                        <Card className='mb-3 bordered'>
                            <CardBody>
                                <h4 className='title font-weight-bold text-primary text-uppercase'>
                                    Прочие настройки
                                </h4>
                                <div className='d-flex justify-content-between mb-1'>
                                    <span className='text-muted'><small>Участие техники в заявках</small></span>
                                    <span className='text-dark h5'>
                                        <DragSwitch
                                            checked={transport.enabled_rent && true}
                                            disabled
                                        />
                                    </span>
                                </div>
                                <div className='d-flex justify-content-between mb-1'>
                                    <span className='text-muted'><small>Сдается в аренду</small></span>
                                    <span className='text-dark h5'>
                                        <DragSwitch
                                            checked={true}
                                            disabled
                                        />
                                    </span>
                                </div>
                                <div className='d-flex justify-content-between mb-1'>
                                    <span className='text-muted'><small>Используется для грузоперевозок</small></span>
                                    <span className='text-dark h5'>
                                        <DragSwitch
                                            checked={transport.enabled_rent && true}
                                            disabled
                                        />
                                    </span>
                                </div>
                                <div className='d-flex justify-content-between mb-1'>
                                    <span className='text-muted'><small>Перевозка опасных грузов</small></span>
                                    <span className='text-dark h5'>
                                        <DragSwitch
                                            checked={transport.enabled_rent && true}
                                            disabled
                                        />
                                    </span>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className='mb-3 bordered'>
                            <CardBody>
                                <h4 className='title font-weight-bold text-primary text-uppercase'>
                                    Свидетельство о регистрации тс
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
                    </Col>
                    <Col>
                        <Card className='mb-3 bordered'>
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
                    </Col>
                    <Col>
                        <Card className='mb-3 bordered'>
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
                    </Col>
                </Row>
            </CardBody>}
        </Card>
    )
}