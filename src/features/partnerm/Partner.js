import React, { useState, useEffect } from 'react';
import { CardTitle, CardBody, Container, Row, Col, Card, CardHeader } from 'reactstrap';
import { getPartnerm, updatePartnerm } from './query';
import { useQuery } from 'react-query';
import CustomForm from '../../extrafunc/Crud/CustomForm';
import { withRouter } from 'react-router-dom';
import PartnerFileUploader from './uploaders/PartnerFileUploader';

function Partner({ history }) {
  const id = history.location.pathname.split("update/")[1]

  return (
    <Row>
      <Col>
        <CustomForm
          moderation={true}
          id={id}
          query_fn={getPartnerm}
          mut_update_fn={updatePartnerm}
          query_key={'partner'}
          array_fields={true}
          fields={
            [
              [
                [
                  {
                    name: 'Имя',
                    key: 'first_name',
                    type: {
                      name: 'text'
                    }
                  },
                ],
                [
                  {
                    name: 'Фамилия',
                    key: 'second_name',
                    type: {
                      name: 'text'
                    }
                  },
                ],
              ],
              // {
              //   name: 'Непромодерированный',
              //   key: 'need_moderation',
              //   proptype: 'bool',
              //   type: {
              //     name: 'checkbox'
              //   }
              // },
              // {
              //   name: 'Сообщение о модерации',
              //   key: 'moderation_message',
              //   type: {
              //     name: 'textarea',
              //   }
              // },
            [
              [
                {
                  name: 'Main',
                  key: 'attachments',
                  media: true,
                  type: {
                    name: 'media',
                    subType: 'main',
                    uploader: PartnerFileUploader
                  }
                },
              ],
              [

                {
                  name: 'Passport 1',
                  key: 'attachments',
                  media: true,
                  type: {
                    name: 'media',
                    subType: 'passport1',
                    uploader: PartnerFileUploader
                  }
                },
              ],
              [
                {
                  name: 'Passport 2',
                  key: 'attachments',
                  media: true,
                  type: {
                    name: 'media',
                    subType: 'passport2',
                    uploader: PartnerFileUploader
                  }
                },
              ],
              [
                {
                  name: 'Passport 2',
                  key: 'attachments',
                  media: true,
                  type: {
                    name: 'media',
                    subType: 'passport2',
                    uploader: PartnerFileUploader
                  }
                },
              ],
              [
                {
                  name: 'Passport 3',
                  key: 'attachments',
                  media: true,
                  type: {
                    name: 'media',
                    subType: 'passport3',
                    uploader: PartnerFileUploader
                  }
                },
              ],
              [
                {
                  name: 'Driving 1',
                  key: 'attachments',
                  media: true,
                  type: {
                    name: 'media',
                    subType: 'driving1',
                    uploader: PartnerFileUploader
                  }
                },
              ],
              [
                {
                  name: 'Driving 2',
                  key: 'attachments',
                  media: true,
                  type: {
                    name: 'media',
                    subType: 'driving2',
                    uploader: PartnerFileUploader
                  }
                },
              ],
              [
                {
                  name: 'License 1',
                  key: 'attachments',
                  media: true,
                  type: {
                    name: 'media',
                    subType: 'license1',
                    uploader: PartnerFileUploader
                  }
                },
              ],
              [
                {
                  name: 'License 2',
                  key: 'attachments',
                  media: true,
                  type: {
                    name: 'media',
                    subType: 'license2',
                    uploader: PartnerFileUploader
                  }
                },
              ],
            ],
            // {
            //   name: 'Активный',
            //   key: 'is_active',
            //   type: {
            //     name: 'checkbox',
            //   }
            // },              
            [
              [
                // {
                //   name: 'Роль',
                //   key: 'role',
                //   type: {
                //     name: 'text'
                //   }
                // },
                // {
                //   name: 'Статус',
                //   key: 'status',
                //   type: {
                //     name: 'select',
                //     options: [
                //       { key: 0, name: 'Активный', value: 'active' },
                //       { key: 1, name: 'Деактивированный', value: 'inactive' }
                //     ],
                //     value_field: 'value',
                //     name_field: 'name'
                //   }
                // },
                {
                  name: 'Сфера',
                  key: 'realm',
                  type: {
                    name: 'select',
                    options: [
                      { key: 0, name: 'Заказчики', value: 'client' },
                      { key: 1, name: 'Исполнители', value: 'driver' },
                      { key: 2, name: 'Партнеры', value: null },
                      { key: 3, name: 'Сотрудники', value: 'default' },
                    ],
                    value_field: 'value',
                    name_field: 'name'
                  }
                },
                {
                  name: 'Телефон',
                  key: 'phone',
                  type: {
                    name: 'text'
                  }
                },
                {
                  name: 'Почта',
                  key: 'email',
                  type: {
                    name: 'text'
                  }
                },
                {
                  name: 'Логин',
                  key: 'username',
                  type: {
                    name: 'text'
                  }
                },
                // {
                //   name: 'Зарегистрирован',
                //   key: 'isRegistered',
                //   type: {
                //     name: 'checkbox'
                //   }
                // },
                // {
                //   name: 'Публичный',
                //   key: 'public_id',
                //   type: {
                //     name: 'text'
                //   }
                // },
                // {
                //   name: 'Приватный',
                //   key: 'private_id',
                //   type: {
                //     name: 'text'
                //   }
                // },

                {
                  name: 'Запись',
                  key: 'note',
                  type: {
                    name: 'text'
                  }
                },
              ],
              [
                {
                  name: 'Баланс',
                  key: 'balance',
                  type: {
                    name: 'text'
                  }
                },
                {
                  name: 'День рождения',
                  key: 'birth_date',
                  type: {
                    name: 'text'
                  }
                },
                // {
                //   name: 'Комиссия',
                //   key: 'commission',
                //   type: {
                //     name: 'text'
                //   }
                // },
                {
                  name: 'Язык',
                  key: 'language',
                  type: {
                    name: 'text'
                  }
                },
                {
                  name: 'Компания',
                  key: 'company_name',
                  type: {
                    name: 'text'
                  }
                },
                {
                  name: 'Адрес компании',
                  key: 'company_address',
                  type: {
                    name: 'text'
                  }
                },
                // {
                //   name: 'ИНН',
                //   key: 'inn',
                //   type: {
                //     name: 'text'
                //   }
                // },
                // {
                //   name: 'Номер аккаунта',
                //   key: 'account_number',
                //   type: {
                //     name: 'text'
                //   }
                // },
                // {
                //   name: 'МФО банк',
                //   key: 'mfo_bank',
                //   type: {
                //     name: 'text'
                //   }
                // },
                // {
                //   name: 'НДС',
                //   key: 'nds',
                //   type: {
                //     name: 'text'
                //   }
                // },
               

                // {
                //   name: 'Подтвержден',
                //   key: 'emailVerified',
                //   type: {
                //     name: 'text'
                //   }
                // },
              ]
            ]
            ]
          }
        />
      </Col>
    </Row>
  );
};

Partner.propTypes = {};
Partner.defaultProps = {};

export default withRouter(Partner)