import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import ViewNav from '../elements/ViewNav';
import { useMutation } from 'react-query';
import { delUser } from './query';
import { useHistory } from 'react-router-dom';
import OrdersList from '../orders/OrdersList';
import UsersOrdersList from './UsersOrdersList';
import DriversOrdersList from './DriversOrdersList';
import { DollarSVG, OrderLogoSVG, SuccessSVG, TruckSVG, PercentSVG } from '../../assets/svg/main_svg';
import DriversTransports from './DriversTransports';
import ImageShow from '../../extrafunc/ImageShow';

const ViewDriver = ({ accData = {}, title }) => {

    const filters = [
        {
            name: 'Профиль',
            key: 0
        },
        {
            name: 'Техники',
            key: 1
        },
        {
            name: 'История',
            key: 2
        },
    ]

    const [filter, setfilter] = useState(0);

    const history = useHistory()
    const [modalopen, setmodalopen] = useState(false);

    const [delMut, delMutRes] = useMutation(delUser, {
        onSuccess: () => {
            history.goBack()
        }
    })

    return (<>
        <Modal isOpen={modalopen}>
            <ModalHeader>Удаление элемента</ModalHeader>
            <ModalBody>Хотите удалить элемент?</ModalBody>
            <ModalFooter>
                <div>
                    <Button onClick={() => {
                        delMut({ id: accData.id })
                    }} color='danger' size='sm'>Да</Button>
                    <Button onClick={() => {
                        setmodalopen(false)
                    }} color='white' size='sm'>Нет</Button>
                </div>
            </ModalFooter>
        </Modal>
        <Row className='mb-3'>
            <Col>
                <div className='d-flex justify-content-between align-items-center'>
                    <ViewNav
                        title={'Обзор водителя'}
                        parentNav={{
                            url: '/admin/users',
                            title: 'Водители',
                            action: () => {
                                history.goBack()
                            }
                        }}
                        edit_link={`/admin/users/update/${accData.id}`}
                        id={accData.id}
                        delMut={() => setmodalopen(true)}
                    />

                    <Filters filters={filters} filter={filter} setfilter={setfilter} />
                    <div className='w-25'></div>

                </div>
            </Col>
        </Row>
        {filter == 0 && <UserProfile accData={accData} title={title} />}
        {filter == 1 && <DriversTransports id={accData.id} accData={accData} />}
        {filter == 2 && <DriversOrdersList id={accData.id} />}
    </>
    );
};

const Filters = ({ filters, filter, setfilter, history }) => {
    return (
        <div>
            {filters.map((item, key) => {
                return (
                    <Button
                        size={'sm'}
                        onClick={() => {
                            setfilter(key)
                        }}
                        key={key}
                        color={`${(filter == key) ? 'primary' : 'link'}`}>
                        {item.name}
                    </Button>
                )
            })}
        </div>
    )
}

const UserProfile = ({ accData = {}, title }) => {



    return (
        <>
            <Row>
                <Col>
                    <Card className='mb-3'>
                        <CardBody className='acc_details'>
                            <div className='header'>
                                <h4 className='title font-weight-bold text-primary text-uppercase'>
                                    {title || 'Данные исполнителя'}
                                </h4>
                                <div className='goto-account text-success'>
                                    Активный
                            </div>
                            </div>
                            <div className='body'>
                                <div className='img'>
                                    {/* <img src={accData && accData.attachments
                                        && accData.attachments.main
                                        && accData.attachments.main.result
                                        || require('../../assets/img/acc_img.png')} /> */}
                                    <ImageShow image={{
                                        url: accData.attachments
                                            && accData.attachments.main
                                            && accData.attachments.main.result
                                            || require('../../assets/img/acc_img.png')
                                    }} />
                                </div>
                                <div className='details'>
                                    <div className='name text-dark font-weight-bold'>
                                        {accData && accData.first_name || 'Константин'}
                                        {accData && accData.second_name || 'Константинопольский'}
                                        {` · ID ${accData.id || '9541'}`}
                                    </div>
                                    <div className='legacy text-muted small'>Физическое лицо</div>
                                    <div className='contact'>
                                        <div className='phone'>
                                            {accData.phone || '998 97 455-59-42'}
                                        </div>
                                        <div className='d-flex'>
                                            <span className='text-info'><i className='fa fa-pen ' /> Написать</span>
                                            <span className='text-success ml-2'><i className='fa fa-phone ' /> Позвонить</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className='mb-3'>
                        <CardBody>
                            <h4 className='title font-weight-bold text-primary text-uppercase'>
                                Данные техники
                        </h4>
                            <div className='d-flex justify-content-between mb-1'>
                                <span className='text-muted'><small>Тип пользователя</small></span>
                                <span className='text-dark h5'>{accData.type || 'Физическое лицо'}</span>
                            </div>
                            <div className='d-flex justify-content-between mb-1'>
                                <span className='text-muted'><small>Тип занятости</small></span>
                                <span className='text-dark h5'>{accData.category && accData.category.name_ru || 'Нет'}</span>
                            </div>
                            <div className='d-flex justify-content-between mb-1'>
                                <span className='text-muted'><small>Название компании</small></span>
                                <span className='text-dark h5'>{accData.category && accData.category.name_ru || 'Нет'}</span>
                            </div>
                        </CardBody>
                    </Card>

                    <Card className='mb-3'>
                        <CardBody>
                            <h4 className='title font-weight-bold text-primary text-uppercase'>
                                Общая информация
                        </h4>
                            <div className='d-flex justify-content-between mb-1'>
                                <span className='text-muted'><small>Дата регистрации</small></span>
                                <span className='text-dark h5'>{accData.type || 'Физическое лицо'}</span>
                            </div>
                            <div className='d-flex justify-content-between mb-1'>
                                <span className='text-muted'><small>Страна и город</small></span>
                                <span className='text-dark h5'>{accData.category && accData.category.name_ru || 'Нет'}</span>
                            </div>
                            <div className='d-flex justify-content-between mb-1'>
                                <span className='text-muted'><small>Номер телефона</small></span>
                                <span className='text-dark h5'>{accData.category && accData.category.name_ru || 'Нет'}</span>
                            </div>
                            <div className='d-flex justify-content-between mb-1'>
                                <span className='text-muted'><small>E-mail</small></span>
                                <span className='text-dark h5'>{accData.category && accData.category.name_ru || 'Нет'}</span>
                            </div>
                            <div className='d-flex justify-content-between mb-1'>
                                <span className='text-muted'><small>Дата рождения</small></span>
                                <span className='text-dark h5'>{accData.category && accData.category.name_ru || 'Нет'}</span>
                            </div>
                        </CardBody>
                    </Card>

                    <Card className='mb-3'>
                        <CardBody>
                            <h4 className='title font-weight-bold text-primary text-uppercase'>
                                Привязанная карта
                        </h4>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex align-items-center'>
                                    <span className='card-icon mr-2'>
                                        <img src={'https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/Visa-icon.png'} />
                                    </span>
                                    <span className='text-dark'>{accData.type || '8600 1234 5678 9123'}</span>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <span className='card-icon mr-2'>
                                        <img src={'https://cdn.vox-cdn.com/thumbor/VKD3KfczL8xi89_n32rmbjTpdlg=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg'} />
                                    </span>
                                    <span className='text-dark'>{accData.category && accData.category.name_ru || '8600 1234 5678 9123'}</span>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <span className='card-icon mr-2'>
                                        <img src={'https://img.icons8.com/color/452/unionpay.png'} />
                                    </span>
                                    <span className='text-dark'>{accData.category && accData.category.name_ru || '8600 1234 5678 9123'}</span>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card className='mb-3'>
                        <CardBody>
                            <h4 className='title font-weight-bold text-primary text-uppercase'>
                                Пасспорт
                            </h4>
                            <div className='docs'>
                                <div className='doc'>
                                    <div className='doc-title'>
                                        Разворот с фотографией
                                    </div>
                                    <div className='doc-img'>
                                        <i className='fa fa-check-circle' />
                                        {/* <img src={accData.attachments && accData.attachments.passport1
                                            && accData.attachments.passport1.result
                                            || require('../../assets/img/tempfile.png')} alt='doc' /> */}
                                        <ImageShow image={{
                                            url: accData.attachments && accData.attachments.passport1
                                                && accData.attachments.passport1.result
                                                || require('../../assets/img/tempfile.png')
                                        }} />
                                    </div>
                                    <div>
                                        <i className='text-success'>Проверено</i>
                                    </div>
                                </div>
                                <div className='doc'>
                                    <div className='doc-title'>
                                        Страница с регистрацией
                                    </div>
                                    <div className='doc-img'>
                                        <i className='fa fa-check-circle' />
                                        <ImageShow image={{
                                            url: accData.attachments && accData.attachments.passport2
                                                && accData.attachments.passport2.result
                                                || require('../../assets/img/tempfile.png')
                                        }} />
                                    </div>
                                    <div>
                                        <i className='text-success'>Проверено</i>
                                    </div>
                                </div>
                                <div className='doc'>
                                    <div className='doc-title'>
                                        Селфи с главным разворотом
                                    </div>
                                    <div className='doc-img'>
                                        <i className='fa fa-check-circle' />
                                        <ImageShow image={{
                                            url: accData.attachments && accData.attachments.passport3
                                                && accData.attachments.passport3.result
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
                                Водительское удостоверение
                            </h4>
                            <div className='docs'>
                                <div className='doc'>
                                    <div className='doc-title'>
                                        Первая сторона
                                    </div>
                                    <div className='doc-img'>
                                        <i className='fa fa-check-circle' />
                                        <ImageShow image={{
                                            url: accData.attachments && accData.attachments.driving1
                                                && accData.attachments.driving1.result
                                                || require('../../assets/img/tempfile.png')
                                        }} />
                                    </div>
                                    <div>
                                        <i className='text-success'>Проверено</i>
                                    </div>
                                </div>
                                <div className='doc'>
                                    <div className='doc-title'>
                                        Вторая сторона
                                    </div>
                                    <div className='doc-img'>
                                        <i className='fa fa-check-circle' />
                                        <ImageShow image={{
                                            url: accData.attachments && accData.attachments.driving2
                                                && accData.attachments.driving2.result
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
                                Лицензия
                            </h4>
                            <div className='docs'>
                                <div className='doc'>
                                    <div className='doc-title'>
                                        Фото лицензии
                                    </div>
                                    <div className='doc-img'>
                                        <i className='fa fa-check-circle' />
                                        <ImageShow image={{
                                            url: accData.attachments && accData.attachments.license1
                                                && accData.attachments.license1.result
                                                || require('../../assets/img/tempfile.png')
                                        }} />
                                    </div>
                                    <div>
                                        <i className='text-success'>Проверено</i>
                                    </div>
                                </div>
                                <div className='doc'>
                                    <div className='doc-title'>
                                        Фото лицензии
                                    </div>
                                    <div className='doc-img'>
                                        <i className='fa fa-check-circle' />
                                        <ImageShow image={{
                                            url: accData.attachments && accData.attachments.license2
                                                && accData.attachments.license2.result
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
            <Row className='pl-3'>
                <h3>Статистические данные</h3>
            </Row>
            <Row className='mb-3'>
                <Col>
                    <Card>
                        <CardBody className='p-3 d-flex justify-content-between align-items-center'>
                            <div>
                                <h4 className='title font-weight-bold text-primary text-uppercase'>
                                    Заработано
                                </h4>
                                <span className='text-dark h1'>15 245 000</span>
                            </div>
                            <span className='text-dark h5'><DollarSVG /></span>

                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody className='p-3 d-flex justify-content-between align-items-center'>

                            <div>
                                <h4 className='title font-weight-bold text-primary text-uppercase'>
                                    Заработок OrderTruck
                                </h4>
                                <span className='text-dark h1'>+762 250</span>
                            </div>
                            <span className='text-dark h5'><OrderLogoSVG /></span>

                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <CardBody className='p-3 '>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h4 className='title font-weight-bold text-primary text-uppercase'>
                                        Заработано
                                </h4>
                                    <span className='text-dark h1'>15</span>
                                </div>
                                <span className='text-dark h5'><SuccessSVG /></span>
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <span className='text-dark'>Отменённых</span>
                                <span className='text-dark'>3</span>
                            </div>
                        </CardBody>

                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody className='p-3'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h4 className='title font-weight-bold text-primary text-uppercase'>
                                        Заработок OrderTruck
                                    </h4>
                                    <span className='text-dark h1'>+762 250</span>
                                </div>
                                <span className='text-dark h5'><TruckSVG /></span>
                            </div>

                            <div className='d-flex justify-content-between align-items-center'>
                                <span className='text-dark'>Кузовов</span>
                                <span className='text-dark'>4</span>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardBody className='p-3'>

                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    <h4 className='title font-weight-bold text-primary text-uppercase'>
                                        Процент исполнителя
                                    </h4>
                                    <span className='text-dark h1'>15%</span>
                                </div>
                                <span className='text-dark h5'><PercentSVG /></span>
                            </div>

                            <div className='d-flex justify-content-between align-items-center'>
                                <span className='text-dark'>Партнер</span>
                                <span className='text-dark'>ID 4520</span>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

ViewDriver.propTypes = {};

export default ViewDriver;