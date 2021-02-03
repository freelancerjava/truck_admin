import React, { useState } from 'react';
import { CardBody, CardTitle, Card } from 'reactstrap';
import moment from 'moment'
import { DragSwitch } from 'react-dragswitch'
import 'react-dragswitch/dist/index.css'
import { Map } from '../../extrafunc/Map';
// import PropTypes from 'prop-types';

export default function TransportDetailCard({ transport }) {
    return (
        <>
            <Card className='mb-3'>
                <CardBody>
                    <h4 className='title font-weight-bold text-primary text-uppercase'>
                        Данные техники
                    </h4>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-muted'><small>Статус модерации</small></span>
                        <span className='text-dark h5'>{transport.status || 'Без статуса'}</span>
                    </div>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-muted'><small>Категория</small></span>
                        <span className='text-dark h5'>{transport.category && transport.category.name_ru || 'Без категории'}</span>
                    </div>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-muted'><small>Кузов</small></span>
                        <span className='text-dark h5'>{
                            transport.category
                            && transport.category.parent
                            && transport.category.parent.parent
                            && transport.category.parent.parent.name_ru
                            || 'Без кузова'}</span>
                    </div>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-muted'><small>Марка</small></span>
                        <span className='text-dark h5'>{transport.make && transport.make.name ||  'Без марки'}</span>
                    </div>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-muted'><small>Модель</small></span>
                        <span className='text-dark h5'>{transport.model && transport.model.name ||  'Без модели'}</span>
                    </div>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-muted'><small>Гос. номер</small></span>
                        <span className='text-danger h5'>{transport.gos_number || 'Нет'}</span>
                    </div>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-muted'><small>Год выпуска</small></span>
                        <span className='text-dark h5'>{transport.year || 'Нет'}</span>
                    </div>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-muted'><small>Типы осей</small></span>
                        <span className='text-dark h5'>{transport.x || 'Нет'}</span>
                    </div>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-muted'><small>Тип топлива</small></span>
                        <span className='text-dark h5'>{transport.x || 'Нет'}</span>
                    </div>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-muted'><small>Лошадиных сил</small></span>
                        <span className='text-dark h5'>{transport.x || 'Нет'}</span>
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
                        <span className='text-dark h5'>{transport.min_price || 'Нет'}</span>
                    </div>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-muted'><small>Цена за 1 км</small></span>
                        <span className='text-dark h5'>{transport.one_km_price || 'Нет'}</span>
                    </div>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-ищдв'><small>Используется для грузоперевозок</small></span>
                        <DragSwitch
                            checked={transport.enabled_cargo}
                            disabled
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
                        <span className='text-dark h5'>{transport.one_hour_price || 'Нет'}</span>
                    </div>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-muted'><small>Мин. кол-во часов аренды</small></span>
                        <span className='text-dark h5'>{transport.min_hour || 'Нет'}</span>
                    </div>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-muted'><small>Мин. тариф за вызовы</small></span>
                        <span className='text-dark h5'>{transport.min_order_price || 'Нет'}</span>
                    </div>
                    <div className='d-flex justify-content-between mb-1'>
                        <span className='text-ищдв'><small>Сдается в аренду</small></span>
                        <DragSwitch
                            checked={transport.enabled_rent && true}
                            disabled
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
