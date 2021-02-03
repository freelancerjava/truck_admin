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
          view_link={"/admin/transactions/view"}
          // add_link={"/admin/transactions/index/add"}
          // edit_link={"/admin/transactions/index/update"}
          query_filter={{ include: [{user:['partner']}, 'client', 'order'] }}
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
                name: 'ID транзакции',
                key: 'id',
                type: {
                  name: 'text'
                },
                sort:'id'
              },
              {
                name: 'ID заказа',
                key: 'orderId',
                type: {
                  name: 'text'
                },
                sort:'orderId'
              },
              // {
              //   name: 'Тип оплаты',
              //   key: 'type',
              //   type: {
              //     name: 'text'
              //   }
              // },
              {
                name: 'Заказщик',
                keys: [
                  'client.first_name',
                  'client.second_name',
                  'client.phone',
                  'client.email',
                  'client.username',
                ],
                type: {
                  name: 'text'
                },
                sort:'clientId'
              },
              {
                name: 'Исполнитель',
                keys: [
                  'user.first_name',
                  'user.second_name',
                  'user.phone',
                  'user.email',
                  'user.username',
                ],
                type: {
                  name: 'text'
                },
                sort:'userId'
              },
              {
                name: 'Партнер',
                keys: [
                  'user.partner.first_name',
                  'user.partner.second_name',
                  'user.partner.phone',
                  'user.partner.email',
                  'user.partner.username',
                ],
                sort:'userId'
              },
              {
                name: 'Дата заказа',
                key: 'createdAt',
                datentime: true,
                sort:'createdAt'
              },
              {
                name: 'Дата транзакции',
                key: 'createdAt',
                datentime: true,
                sort:'createdAt'
              },
              {
                name: 'Дата изменения',
                key: 'updatedAt',
                datentime: true,
                sort:'updatedAt'
              },
              // {
              //   name: 'Запись',
              //   key: 'note',
              //   type: {
              //     name: 'text'
              //   }
              // },
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
