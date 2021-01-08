import React from 'react';
import { Row, Col } from 'reactstrap';
import { addUser } from './query';
import CustomForm from '../../extrafunc/Crud/CustomForm';
import UserFileUploader from './uploaders/UserFileUploader';
// import PropTypes from 'prop-types';

export default function NewUser() {
  return (
    <Row>
      <Col>
        <CustomForm
          mut_create_fn={addUser}
          query_key={'newuser'}
          fields={
            [
              {
                name: 'Имя',
                key: 'first_name',
                type: {
                  name: 'text'
                }
              },
              {
                name: 'Фамилия',
                key: 'second_name',
                type: {
                  name: 'text'
                }
              },
              {
                name: 'Main',
                key: 'attachments',
                media: true,
                type: {
                  name: 'media',
                  subType: 'main',
                  uploader: UserFileUploader
                }
              },
              {
                name: 'Passport 1',
                key: 'attachments',
                media: true,
                type: {
                  name: 'media',
                  subType: 'passport1',
                  uploader: UserFileUploader
                }
              },
              {
                name: 'Passport 2',
                key: 'attachments',
                media: true,
                type: {
                  name: 'media',
                  subType: 'passport2',
                  uploader: UserFileUploader
                }
              },
              {
                name: 'Passport 2',
                key: 'attachments',
                media: true,
                type: {
                  name: 'media',
                  subType: 'passport2',
                  uploader: UserFileUploader
                }
              },
              {
                name: 'Passport 3',
                key: 'attachments',
                media: true,
                type: {
                  name: 'media',
                  subType: 'passport3',
                  uploader: UserFileUploader
                }
              },
              {
                name: 'Driving 1',
                key: 'attachments',
                media: true,
                type: {
                  name: 'media',
                  subType: 'driving1',
                  uploader: UserFileUploader
                }
              },
              {
                name: 'Driving 2',
                key: 'attachments',
                media: true,
                type: {
                  name: 'media',
                  subType: 'driving2',
                  uploader: UserFileUploader
                }
              },
              {
                name: 'License 1',
                key: 'attachments',
                media: true,
                type: {
                  name: 'media',
                  subType: 'license1',
                  uploader: UserFileUploader
                }
              },
              {
                name: 'License 2',
                key: 'attachments',
                media: true,
                type: {
                  name: 'media',
                  subType: 'license2',
                  uploader: UserFileUploader
                }
              },
              {
                name: 'Роль',
                key: 'role',
                type: {
                  name: 'text'
                }
              },
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
                  name: 'email'
                }
              },
              {
                name: 'Пароль',
                key: 'password',
                type: {
                  name: 'password'
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
              // {
              //   name: 'Активный',
              //   key: 'is_active',
              //   type: {
              //     name: 'checkbox',
              //   }
              // },
              {
                name: 'Запись',
                key: 'note',
                type: {
                  name: 'text'
                }
              },
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
              // {
              //   name: 'Подтвержден',
              //   key: 'emailVerified',
              //   type: {
              //     name: 'text'
              //   }
              // },
            ]
          }
        />
      </Col>
    </Row>
  );
};

NewUser.propTypes = {};
NewUser.defaultProps = {};
