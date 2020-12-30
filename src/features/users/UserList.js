import React from 'react';
import { getUsers, getCount } from './query';
import ListTable from '../../extrafunc/Crud/ListTable';
import { Container, Row, Col } from 'reactstrap';
// import PropTypes from 'prop-types';

export default function UserList() {
  return (
    <Row>
      <Col>
        <ListTable
          query_fn={getUsers}
          cnt_query_fn={getCount}
          query_key={"users"}
          title={"Лист пользователей"}
          add_link={"/admin/users/index/add"}
          edit_link={"/admin/users/index/update"}
          query_filter={{ include: [] }}
          filters={{
            field: 'realm',
            data: [
              { key: 0, name: 'Заказчики', value: 'client' },
              { key: 1, name: 'Исполнители', value: 'driver' },
              { key: 2, name: 'Партнеры', value: null },
              { key: 3, name: 'Сотрудники', value: 'default' },
            ]
          }}
          innerFilters={{
            field: 'status',
            data: [
              { key: 0, name: 'Active', value: 'active' },
              { key: 1, name: 'Checking', value: 'checking' },
              { key: 2, name: 'Need registration', value: 'need_registration' },
              { key: 3, name: 'Canceled by moderator', value: 'canceled_by_moderator' },
              { key: 4, name: 'Deactivated', value: 'deactivated' },
              { key: 5, name: 'All', value: null },
            ]
          }}
          id={"id"}
          headers={
            [
              {
                name: 'ID',
                key: 'id',
                type: {
                  name: 'text'
                }
              },
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
              // {
              //   name: 'Промодерированные',
              //   key: 'need_moderation',
              //   def_val: "Прошедшие",
              //   type: {
              //     name: 'switch'
              //   }
              // },
              // {
              //   name: 'Причина отказа',
              //   key: 'moderation_message',
              //   type: {
              //     name: 'text'
              //   }
              // },
              {
                name: 'Медиа',
                key: 'attachments.main.result',
                media: true
              },
              {
                name: "Passport 1",
                key: 'attachments.passport1.preview',
                media: true
              },
              {
                name: "Passport 2",
                key: 'attachments.passport2.preview',
                media: true
              },
              {
                name: "Passport 3",
                key: 'attachments.passport3.preview',
                media: true
              },
              {
                name: "Driving 1",
                key: 'attachments.driving1.preview',
                media: true
              },
              {
                name: "Driving 2",
                key: 'attachments.driving2.preview',
                media: true
              },
              {
                name: "License 1",
                key: 'attachments.license1.preview',
                media: true
              },
              {
                name: "License 2",
                key: 'attachments.license2.preview',
                media: true
              },
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
              //     name: 'text'
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
              //   def_val: "false",
              //   type: {
              //     name: 'switch'
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
              //   def_val: "false",
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
              {
                name: 'Баланс',
                key: 'balance',
                type: {
                  name: 'text'
                }
              },
              // {
              //   name: 'День рождения',
              //   key: 'birth_date',
              //   type: {
              //     name: 'text'
              //   }
              // },
              {
                name: 'Комиссия',
                key: 'commission',
                type: {
                  name: 'text'
                }
              },
              // {
              //   name: 'Язык',
              //   key: 'language',
              //   type: {
              //     name: 'text'
              //   }
              // },
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
              {
                name: 'ИНН',
                key: 'inn',
                type: {
                  name: 'text'
                }
              },
              // {
              //   name: 'Номер аккаунта',
              //   key: 'account_number',
              //   type: {
              //     name: 'text'
              //   }
              // },
              {
                name: 'МФО банк',
                key: 'mfo_bank',
                type: {
                  name: 'text'
                }
              },
              {
                name: 'НДС',
                key: 'nds',
                type: {
                  name: 'text'
                }
              },
              {
                name: 'Сфера',
                key: 'realm',
                type: {
                  name: 'text'
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

UserList.propTypes = {};
UserList.defaultProps = {};
