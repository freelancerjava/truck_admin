import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import ImageShow from '../../extrafunc/ImageShow';
// import PropTypes from 'prop-types';

export default function UserInfoCard({ title, accLink, accData = {} }) {
  return (
    <Card className='mb-3'>
      <CardBody className='acc_details'>
        <div className='header'>
          <h4 className='title text-uppercase' style={{fontSize: 16, fontWeight: '600', color: '#2D2E80'}}>
            {title || 'Данные заказчика'}
          </h4>
          <div className='goto-account' style={{fontWeight: '400', fontSize: 16, color: '#2F80ED'}}>
            <Link to={accLink}>Перейти в аккаунт</Link>
          </div>
        </div>
        <div className='body'>
          <div className='img'>
            {/* <img src={accData.attachments
              && accData.attachments.main
              && accData.attachments.main.result
              || require('../../assets/img/acc_img.png')} /> */}
              <ImageShow image={{url:accData.attachments
              && accData.attachments.main
              && accData.attachments.main.result
              || require('../../assets/img/acc_img.png')}}/>
          </div>
          <div className='details'>
            <div className='name text-dark font-weight-bold'>
              <h4 style={{fontSize: 18, fontWeight: '600', color: '#20243D'}}>
                {`${accData.first_name} ` || 'Константин'}
                { accData.second_name || 'Константинопольский'}
                {` · ID ${accData.id || '9541'}`}
              </h4>
            </div>
            <h5 style={{fontSize: 15, fontWeight: '400', color: '#B5B8C2'}}>Физическое лицо</h5>
            <div className='contact'>
              <h5 style={{fontSize: 15, fontWeight: '600', color: '#20243D'}}>
                {accData.phone || '998 97 455-59-42'}
              </h5>
              <div className='d-flex'>
                <span style={{fontSize: 15, fontWeight: '500', color: '#2F80ED', marginRight: 24}}>
                  <i className='fa fa-pen ' style={{marginRight: 16}} />Написать</span>
                <span style={{fontSize: 15, fontWeight: '500', color: '#27AE60'}}>
                  <i className='fa fa-phone ' style={{marginRight: 16}} />Позвонить</span>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

UserInfoCard.propTypes = {};
UserInfoCard.defaultProps = {};
