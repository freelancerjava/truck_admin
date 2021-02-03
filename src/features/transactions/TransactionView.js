import React, { useState, useEffect } from 'react';
import { Row, Col, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import ViewNav from '../elements/ViewNav';
import { useMutation, useQuery } from 'react-query';
import { delUser, getTransaction } from './query';
import { useHistory, Link } from 'react-router-dom';
import OrdersList from '../orders/OrdersList';
import { DollarSVG, OrderLogoSVG, SuccessSVG, TruckSVG, PercentSVG, TimeSVG, PriceSVG, TotalPercentSVG, DateSVG } from '../../assets/svg/main_svg';
import { getTransactionData } from './query'
import moment from 'moment'
import { strapi } from '../../axios';
import ImageShow from '../../extrafunc/ImageShow';

const TransactionView = () => {



    const history = useHistory()
    const orderId = history.location.pathname.split('view/')[1]
    const [data, setdata] = useState({});
    const qdata = useQuery(['tdata', { id: orderId, filter: JSON.stringify({ include: ['client', 'user', 'order'] }) }], getTransactionData)
    useEffect(() => {
        if (qdata.data) {
            setdata(qdata.data)
        } else {
            setdata({})
        }
        console.log(qdata.data);

    }, [qdata.data])

    const [transaction, settransaction] = useState([]);
    useEffect(() => {
        data.orderId && strapi.request('get', `mains/transaction/${data.orderId}`).then((res) => {
            settransaction(res.data)
        })
    }, [data.orderId])

    return (
        <div>
            {data && <TransactionNav accData={data} />}
            {data && <TransactionContent data={data} />}
            {data && <Statistic transaction={transaction} />}
        </div>
    );
};

export default TransactionView;

const TransactionNav = ({ accData = {} }) => {
    const history = useHistory()
    return (
        <Row className='mb-3'>
            <Col>
                <div className='d-flex justify-content-between align-items-center'>
                    <ViewNav
                        title={'Обзор транзакции'}
                        parentNav={{
                            url: '/admin/transactions',
                            title: 'Транзакции',
                            action: () => {
                                history.goBack()
                            }
                        }}
                        // edit_link={`/admin/users/update/${accData.id}`}
                        id={accData.id}
                    // delMut={() => setmodalopen(true)}
                    />

                </div>
            </Col>
        </Row>
    )
}

const UserCard = ({ accData = {}, title, accLink }) => {
    return (
        <Card className='mb-3'>
            <CardBody className='acc_details'>
                <div className='header'>
                    <h4 className='title font-weight-bold text-primary text-uppercase'>
                        {title || 'Данные исполнителя'}
                    </h4>
                    <div className='goto-account'>
                        <Link to={accLink}>Перейти в аккаунт</Link>
                    </div>
                </div>
                <div className='body'>
                    <div className='img'>
                        <ImageShow image={{
                            url: accData && accData.attachments
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
    )
}

const TransactionContent = ({ data = {} }) => {
    return (<>
        <Row>
            <Col>
                {data.client && <UserCard accData={data.client} title={'Данные заказчика'} accLink={`/admin/users/view/${data.client.id}`} />}
            </Col>
            <Col>
                {data.user && <UserCard accData={data.user} title={'Данные исполнителя'} accLink={`/admin/users/view/${data.user.id}`} />}
            </Col>
        </Row>
        <Row>
            <Col>
                {data.order && <OrderCard order={data.order} />}
            </Col>
            <Col>
                {data.partner && <UserCard accData={data.partner} title={'Данные партнера'} accLink={`/admin/users/view/${data.client.id}`} />}
            </Col>
        </Row>
    </>)
}

const OrderCard = ({ order }) => {
    return (
        <Card className='mb-3'>
            <CardBody>
                <div className='d-flex justify-content-between align-items-center'>
                    <h4 className='title font-weight-bold text-primary text-uppercase'>
                        Данные заказа
                    </h4>
                    {/* <StatusBadge status={order.status} /> */}
                </div>
                <div className='d-flex justify-content-between mb-1'>
                    <span className='text-muted'><small>ID заказа</small></span>
                    <span className='text-dark h5 mb-0'>{order.id || 'Нет'}</span>
                </div>
                <div className='d-flex justify-content-between mb-1'>
                    <span className='text-muted'><small>Дата заказа</small></span>
                    <span className='text-dark h5 mb-0'>{order.createdAt && moment(order.createdAt).format('DD.MM.YYYY') || 'Нет'}</span>
                </div>
                <div className='d-flex justify-content-between mb-1'>
                    <span className='text-muted'><small>Время заказа</small></span>
                    <span className='text-dark h5 mb-0'>{order.createdAt && moment(order.createdAt).format('hh:mm') || 'Нет'}</span>
                </div>
                <div className='d-flex justify-content-between mb-1'>
                    <span className='text-muted'><small>{'Выбранный тип авто'}</small></span>
                    <span className='text-dark h5 mb-0'>{
                        order.category
                        && order.category.parent
                        && order.category.parent.parent
                        && order.category.parent.parent.name_ru
                        || 'Нет'}</span>
                </div>
                <div className='d-flex justify-content-between mb-1'>
                    <span className='text-muted'><small>Дата погрузки</small></span>
                    <span className='text-dark h5 mb-0'>
                        {order.when === 'now'
                            && (moment(order.createdAt).format('DD.MM') + ' в ' + moment(order.createdAt).format('hh:mm'))
                            || order.when === 'planned'
                            && (moment(order.date).format('DD.MM') + ' в ' + moment(order.date).format('hh:mm'))
                            || 'Нет'}
                    </span>
                </div>
                <div className='d-flex justify-content-between mb-1'>
                    <span className='text-muted'><small>Метод оплаты</small></span>
                    <span className='text-dark h5 mb-0'>
                        {order.payment
                            && (order.payment.type === 'cash'
                                && 'Наличные'
                                || order.payment.type === 'card'
                                && 'UzCard')
                            || 'Нет'}
                    </span>
                </div>
                <div className='d-flex justify-content-between mb-1'>
                    <span className='text-muted'><small>Разрешить догруз</small></span>
                    <span className='text-danger h5 mb-0'>{order.allowAdditionalLoad ? 'Да' : 'Нет'}</span>
                </div>
                <div className='d-flex justify-content-between flex-column'>
                    <span className='text-muted mb-1'><small>Комментарий</small></span>
                    <span className='text-dark h5 mb-0'>
                        {order.comment || 'Комментарий отсутствует'}
                    </span>
                </div>
            </CardBody>
        </Card>
    )
}

const StatisticCard = ({ title, amount, Icon }) => {
    return (
        <Card>
            <CardBody className='p-3 d-flex justify-content-between align-items-center'>
                <div>
                    <h4 className='title font-weight-bold text-primary text-uppercase'>
                        {title || 'Заработано'}
                    </h4>
                    <span className='text-dark h1'>{amount || '15 245 000'}</span>
                </div>
                <span className='text-dark h5'><Icon /></span>

            </CardBody>
        </Card>
    )
}

const Statistic = ({ transaction }) => {
    return (<>
        <Row className='pl-3'>
            <h3>Статистические данные</h3>
        </Row>
        <Row className='mb-3'>
            <Col>
                <StatisticCard Icon={DollarSVG} title={'Итоговая сумма'} amount={transaction[0] && transaction[0].amount} />
            </Col>
            <Col>
                <StatisticCard Icon={PriceSVG} title={'Сумма водителю'} amount={transaction[0] && transaction[0].amount} />
            </Col>
            <Col>
                <StatisticCard Icon={TotalPercentSVG} title={'Процент партнера (5%)'} amount={transaction[1] && transaction[1].amount} />
            </Col>
        </Row>
        <Row>
            <Col>
                <StatisticCard Icon={OrderLogoSVG} title={'Заработок OrderTruck'} amount={transaction[0] && transaction[1] && (transaction[0].amount - transaction[1].amount)} />
            </Col>
            <Col>
                <StatisticCard Icon={DateSVG} title={'Дата и время оплаты исполнителем'} amount={moment(transaction[1] && transaction[1].createdAt).format('DD.MM.YYYY в hh:mm:ss')} />
            </Col>
        </Row>
    </>)
}