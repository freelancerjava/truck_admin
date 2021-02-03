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
          <h4 className='title font-weight-bold text-primary text-uppercase'>
            {title || 'Данные заказчика'}
          </h4>
          <div className='goto-account'>
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
              {accData.first_name || 'Константин'}
              {accData.second_name || 'Константинопольский'}
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
  );
};

UserInfoCard.propTypes = {};
UserInfoCard.defaultProps = {};
