import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import ViewNav from '../elements/ViewNav';
import { useMutation } from 'react-query';
import { delUser } from './query';
import { useHistory } from 'react-router-dom';
import OrdersList from '../orders/OrdersList';
import UsersOrdersList from './UsersOrdersList';
import ImageShow from '../../extrafunc/ImageShow';

const ViewClient = ({ accData = {}, title }) => {

    const filters = [
        {
            name: 'Профиль',
            key: 0
        },
        {
            name: 'История',
            key: 1
        }
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
                        title={'Обзор заказщика'}
                        parentNav={{
                            url: '/admin/users',
                            title: 'Заказщики',
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
        {filter == 0 ? <UserProfile accData={accData} title={title} /> : <UsersOrdersList id={accData.id} />}
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
                                    {title || 'Данные заказчика'}
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
                    <Card>
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
                </Col>
                <Col>
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
            </Row>
        </>
    )
}

ViewClient.propTypes = {};

export default ViewClient;