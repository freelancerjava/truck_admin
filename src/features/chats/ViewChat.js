import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import 'react-chat-elements/dist/main.css';
import { MessageList, ChatItem, Input } from 'react-chat-elements'
import { Card, Row, CardHeader, CardBody, Col, Button } from 'reactstrap';
import { getOrder } from '../orders/query';
import { useHistory } from 'react-router-dom';
import { useQuery, useMutation } from 'react-query';
import { strapi } from '../../axios';

import ChatBox, { ChatFrame } from 'react-chat-plugin';
import { getMessages, sendMessage } from './query';

import moment from 'moment'



export default function ViewChat() {

  return (
    <>
      <ChatPlugin />
    </>
  )

};

ViewChat.propTypes = {};
ViewChat.defaultProps = {};

const ChatPlugin = () => {
  const [messages, setMessages] = useState([])

  const history = useHistory()

  const id = history.location.pathname.split("view/")[1]

  const [data, setData] = useState({})

  const messagesdata = useQuery(['messages', { secondUserId: id, page: 1 }], getMessages)

  const [sendMut, sendMutRes] = useMutation(sendMessage, {
    onSuccess: () => {
      messagesdata.refetch()
    }
  })


  console.log(messagesdata.data);

  useEffect(() => {
    if (messagesdata.data) {
      setMessages(messagesdata.data.data.slice().reverse().map(item => {
        return {
          author: {
            username: item.fromuser_name,
            id: item.fromUserId == id ? id : 1,
            avatarUrl: item.attachments && item.attachments.main && item.attachments.main.result || 'https://image.flaticon.com/icons/svg/2446/2446032.svg',
          },
          text: item.text || '',
          type: item.type || 'text',
          timestamp: moment(item.createdAt).toISOString(),
        }
      }))
    } else {
      setMessages([])
    }
  }, [messagesdata.data, id])

  const handleOnSendMessage = (message) => {
    // setMessages([
    //   ...messages,
    //   {
    //     author: {
    //       username: 'user1',
    //       id: 1,
    //       avatarUrl: 'https://image.flaticon.com/icons/svg/2446/2446032.svg',
    //     },
    //     text: message,
    //     timestamp: +new Date(),
    //     type: 'text'
    //   }
    // ])
    sendMut({
      toUserId: parseInt(id),
      message: {
        type: 'text',
        text: message
      }
    })



  }

  return (
    <div className="chats-view-chat">
      <Card>
        <Row>
          <Col>
            <CardHeader>
            </CardHeader>
            <CardBody>
              <ChatBox
                messages={messages}
                userId={1}
                onSendMessage={handleOnSendMessage}
                width={'500px'}
                height={'500px'}
              />
            </CardBody>
          </Col>
        </Row>
      </Card>

    </div>

  )
}


const ChatWindow = () => {
  const history = useHistory()

  const id = history.location.pathname.split("view/")[1]

  const [data, setData] = useState({})

  // const order = useQuery(['order', { id: id, filter: JSON.stringify({ include: ['creator', 'driver'] }) }], getOrder)

  // useEffect(() => {
  //   if (order.data) {
  //     setData(order.data)
  //   } else {
  //     setData(null)
  //   }
  // }, [order.data]);

  const messagesdata = useQuery(['messages'], () => {
    const data = strapi.request('get', `chats/getmessages/${id}/${1}`)
  })

  console.log(messagesdata);



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
              <Input
                placeholder="Type here..."
                multiline={true}
                rightButtons={
                  <Button
                    color='white'
                    backgroundColor='black'
                    text='Send' />
                } />
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
}