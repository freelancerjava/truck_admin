import React from 'react';
import { getUsers } from './query';
import ListTable from '../../extrafunc/Crud/ListTable';
import { Container, Row, Col } from 'reactstrap';
// import PropTypes from 'prop-types';

export default function UserList() {
  return (
    <Row>
      <Col>
        <ListTable
          query_fn={getUsers}
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
              {
                name: 'Роль',
                key: 'role',
                type: {
                  name: 'text'
                }
              },
              {
                name: 'Статус',
                key: 'status',
                type: {
                  name: 'text'
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
              {
                name: 'Зарегистрирован',
                key: 'isRegistered',
                def_val: "false",
                type: {
                  name: 'switch'
                }
              },
              {
                name: 'Публичный',
                key: 'public_id',
                type: {
                  name: 'text'
                }
              },
              {
                name: 'Приватный',
                key: 'private_id',
                type: {
                  name: 'text'
                }
              },
              {
                name: 'Активный',
                key: 'is_active',
                def_val: "false",
                type: {
                  name: 'text'
                }
              },
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
              {
                name: 'Комиссия',
                key: 'commission',
                type: {
                  name: 'text'
                }
              },
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
              {
                name: 'ИНН',
                key: 'inn',
                type: {
                  name: 'text'
                }
              },
              {
                name: 'Номер аккаунта',
                key: 'account_number',
                type: {
                  name: 'text'
                }
              },
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

              {
                name: 'Подтвержден',
                key: 'emailVerified',
                type: {
                  name: 'text'
                }
              },
            ]
          }
        />
      </Col>
    </Row>
  );
};

UserList.propTypes = {};
UserList.defaultProps = {};
