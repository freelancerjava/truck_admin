import React, { useState } from 'react';
import { CardBody, CardTitle, Card } from 'reactstrap';
import moment from 'moment'
import { DragSwitch } from 'react-dragswitch'
import 'react-dragswitch/dist/index.css'
import { Map } from '../../extrafunc/Map';
// import PropTypes from 'prop-types';

export default function TransportDetailCard({ transport }) {
    const [checked, setChecked] = useState(true)
    return (
        <>
            <Card className='mb-3'>
                <CardBody>
                    <h4 className='title font-weight-bold text-primary text-uppercase'>
                        Данные техники
                    </h4>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-muted'><small>Статус модерации</small></span>
                        <span className='text-dark h5'>{transport.createdAt && moment(transport.createdAt).format('DD.MM.YYYY') || '30.11.2020'}</span>
                    </div>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-muted'><small>Категория</small></span>
                        <span className='text-dark h5'>{transport.createdAt && moment(transport.createdAt).format('hh:mm') || '21:01'}</span>
                    </div>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-muted'><small>Кузов</small></span>
                        <span className='text-dark h5'>{
                            transport.category
                            && transport.category.parent
                            && transport.category.parent.parent
                            && transport.category.parent.parent.name_ru
                            || 'от 1 кг до 1 т'}</span>
                    </div>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-muted'><small>Марка</small></span>
                        {/* <span className='text-dark h5'>{transport.receipt && JSON.stringify(transport.receipt) ||  '25.08 в 12:42'}</span> */}
                    </div>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-muted'><small>Модель</small></span>
                        <span className='text-dark h5'>{transport.payment && transport.payment.type || 'UzCard'}</span>
                    </div>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-muted'><small>Гос. номер</small></span>
                        <span className='text-danger h5'>Нет</span>
                    </div>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-muted'><small>Год выпуска</small></span>
                        <span className='text-danger h5'>Нет</span>
                    </div>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-muted'><small>Типы осей</small></span>
                        <span className='text-danger h5'>Нет</span>
                    </div>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-muted'><small>Тип топлива</small></span>
                        <span className='text-danger h5'>Нет</span>
                    </div>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-muted'><small>Лошадиных сил</small></span>
                        <span className='text-danger h5'>Нет</span>
                    </div>
                </CardBody>
            </Card>
            <Card className='mb-3'>
                <CardBody>
                    <h4 className='title font-weight-bold text-primary text-uppercase'>
                        Тариф на грузоперевозку
                    </h4>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-muted'><small>Минимальный тариф за рейс</small></span>
                        <span className='text-dark h5'>{transport.createdAt && moment(transport.createdAt).format('DD.MM.YYYY') || '30.11.2020'}</span>
                    </div>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-muted'><small>Цена за 1 км</small></span>
                        <span className='text-dark h5'>{transport.createdAt && moment(transport.createdAt).format('hh:mm') || '21:01'}</span>
                    </div>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-ищдв'><small>Используется для грузоперевозок</small></span>
                        <DragSwitch
                            checked={checked}
                            onChange={c => {
                                setChecked(!checked)
                            }}
                        />
                    </div>
                </CardBody>
            </Card>
            <Card className='mb-3'>
                <CardBody>
                    <h4 className='title font-weight-bold text-primary text-uppercase'>
                        Тариф на аренду техники
                    </h4>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-muted'><small>Цена за один час</small></span>
                        <span className='text-dark h5'>{transport.createdAt && moment(transport.createdAt).format('DD.MM.YYYY') || '30.11.2020'}</span>
                    </div>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-muted'><small>Мин. кол-во часов аренды</small></span>
                        <span className='text-dark h5'>{transport.createdAt && moment(transport.createdAt).format('hh:mm') || '21:01'}</span>
                    </div>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-muted'><small>Мин. тариф за вызовы</small></span>
                        <span className='text-dark h5'>{transport.createdAt && moment(transport.createdAt).format('hh:mm') || '21:01'}</span>
                    </div>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-ищдв'><small>Сдается в аренду</small></span>
                        <DragSwitch
                            checked={checked}
                            onChange={c => {
                                setChecked(!checked)
                            }}
                        />
                    </div>
                </CardBody>
            </Card>
            <Card className='mb-3'>
                <CardBody>
                    <h4 className='title font-weight-bold text-primary text-uppercase'>
                        Техника на карте
                    </h4>
                    <Map markers={[]} />
                </CardBody>
            </Card>
        </>
    );
};

TransportDetailCard.propTypes = {};
TransportDetailCard.defaultProps = {};
