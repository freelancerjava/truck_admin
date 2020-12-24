import React from 'react';
import { Row, Col } from 'reactstrap';
import ListTable from '../../extrafunc/Crud/ListTable';
import { getTransactions, getCount } from './query';
// import PropTypes from 'prop-types';

export default function TransactionsList() {
  return (
    <Row>
      <Col>
        <ListTable
          query_fn={getTransactions}
          cnt_query_fn={getCount}
          query_key={"transactions"}
          title={"Лист транзакций"}
          add_link={"/admin/transactions/index/add"}
          edit_link={"/admin/transactions/index/update"}
          query_filter={{ include: ['user', 'client', 'order'] }}
          filters={{
            field: 'type',
            data: [
              { key: 0, name: 'Наличные', value: 'cash' },
              { key: 1, name: 'Карта', value: 'kapital' },
              { key: 1, name: 'Промокод', value: 'promocode' },
            ]
          }}
          // innerFilters={{
          //   field: 'status',
          //   data: [
          //     { key: 0, name: 'Active', value: 'active' },
          //     { key: 1, name: 'Checking', value: 'checking' },
          //     { key: 2, name: 'Need registration', value: 'need_registration' },
          //     { key: 3, name: 'Canceled by moderator', value: 'canceled_by_moderator' },
          //     { key: 4, name: 'Deactivated', value: 'deactivated' },
          //   ]
          // }}
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
                name: 'Тип оплаты',
                key: 'type',
                type: {
                  name: 'text'
                }
              },
              {
                name: 'ФИО (user)',
                keys: [
                  'user.first_name',
                  'user.second_name',
                  'user.phone',
                  'user.email',
                  'user.username',
                ],
                type: {
                  name: 'text'
                }
              },

              {
                name: 'ФИО (client)',
                keys: [
                  'client.first_name',
                  'client.second_name',
                  'client.phone',
                  'client.email',
                  'client.username',
                ],
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
              // {
              //   name: 'Баланс',
              //   key: 'balance',
              //   type: {
              //     name: 'text'
              //   }
              // },
              // {
              //   name: 'День рождения',
              //   key: 'birth_date',
              //   type: {
              //     name: 'text'
              //   }
              // },
              // {
              //   name: 'Комиссия',
              //   key: 'commission',
              //   type: {
              //     name: 'text'
              //   }
              // },
              // {
              //   name: 'Язык',
              //   key: 'language',
              //   type: {
              //     name: 'text'
              //   }
              // },
              // {
              //   name: 'Компания',
              //   key: 'company_name',
              //   type: {
              //     name: 'text'
              //   }
              // },
              // {
              //   name: 'Адрес компании',
              //   key: 'company_address',
              //   type: {
              //     name: 'text'
              //   }
              // },
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
              //   name: 'Сфера',
              //   key: 'realm',
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
          }
        />
      </Col>
    </Row>
  );
};

TransactionsList.propTypes = {};
TransactionsList.defaultProps = {};
