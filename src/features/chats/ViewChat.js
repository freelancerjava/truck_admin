import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import 'react-chat-elements/dist/main.css';
import { MessageList, ChatItem } from 'react-chat-elements'
import { Card, Row, CardHeader, CardBody, Col } from 'reactstrap';
import { getOrder } from '../orders/query';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-query';



export default function ViewChat() {

  const history = useHistory()

  const id = history.location.pathname.split("view/")[1]

  const [data, setData] = useState({})

  const order = useQuery(['order', { id: id, filter: JSON.stringify({ include: ['creator', 'driver'] }) }], getOrder)

  useEffect(() => {
    if (order.data) {
      setData(order.data)
    } else {
      setData(null)
    }
  }, [order.data]);

  // const messagesdata = useQuery(['messages', {filter: JSON.stringify({where:{or:{}}})}])


  let list = [
    {
      position: 'left',
      type: 'text',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      date: new Date('11-01-2021'),

    },
    {
      position: 'right',
      type: 'text',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      date: new Date(),
    },
    {
      position: 'right',
      type: 'video',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      date: new Date(),
      data: {
        uri: 'https://cdn4.buysellads.net/uu/1/78180/1608829744-260x200_brand_sammy-logo_static.jpg',
        status: {
          click: false,
          loading: 0,
        }
      }
    },
    {
      position: 'left',
      type: 'photo',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      date: new Date(),
      data: {
        uri: 'https://cdn4.buysellads.net/uu/1/78180/1608829744-260x200_brand_sammy-logo_static.jpg',
        status: {
          click: false,
          loading: 0,
        }
      }
    },
    {
      position: 'right',
      type: 'text',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      date: new Date(),
    },
  ]

  list = list.map((item, key) => {
    let avatar = list[key + 1] && list[key + 1].position !== item.position ? 'https://api.ordertruck.uz/docs/174/1611038735544.jpg' : null
    return { ...item, avatar }
  })

  return (
    <div className="chats-view-chat">
      <Card>
        <Row>
          <Col>
            <CardHeader>
              <div className='d-flex justify-content-between align-items-center'>
                <ChatItem
                  avatar={'https://api.ordertruck.uz/docs/174/1611038735544.jpg'}
                  alt={'Reactjs'}
                  title={'ФИО заказчика'}
                  subtitle={'заказчик'}
                  date={null}
                />
                <ChatItem
                  className='right-apponent'
                  avatar={'https://api.ordertruck.uz/docs/174/1611038735544.jpg'}
                  alt={'Reactjs'}
                  title={'ФИО исполнителя'}
                  subtitle={'исполнитель'}
                  date={null}
                />
              </div>
            </CardHeader>
            <CardBody>
              <MessageList
                className='message-list'
                lockable={true}
                toBottomHeight={'100%'}
                dataSource={list} />
            </CardBody>
          </Col>
          <Col>
            <CardBody className='h-100'>
              <div className='d-flex justify-content-center align-items-center flex-column h-50'>
                <div>Данные заказчика</div>
                <div></div>
                <div>Константин И.И. ID 9541</div>
                <div>Физическое лицо</div>
                <div>999 97 455-59-42</div>
                <div className='d-flex'>
                  <span className='text-info'><i className='fa fa-pen ' /> Написать</span>
                  <span className='text-success ml-2'><i className='fa fa-phone ' /> Позвонить</span>
                </div>
              </div>

              <hr />

              <div className='d-flex justify-content-center align-items-center flex-column h-50'>
                <div>Данные заказчика</div>
                <div></div>
                <div>Константин И.И. ID 9541</div>
                <div>Физическое лицо</div>
                <div>999 97 455-59-42</div>
                <div className='d-flex'>
                  <span className='text-info'><i className='fa fa-pen ' /> Написать</span>
                  <span className='text-success ml-2'><i className='fa fa-phone ' /> Позвонить</span>
                </div>
              </div>
            </CardBody>
          </Col>
        </Row>
      </Card>

    </div>
  );
};

ViewChat.propTypes = {};
ViewChat.defaultProps = {};
