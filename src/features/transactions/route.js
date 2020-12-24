// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  Layout,
  TransactionsList,
  Transaction,
  NewTransaction
} from './';

export default {
  path: 'transactions',
  component: Layout,
  childRoutes: [
    { path: "index", component: TransactionsList, isIndex: true, name: "Транзакции", icon: "fa fa-credit-card" },
    { path: "index/update/:id", component: Transaction, name: "Редактирование Транзакции", icon: "fa fa-credit-card", inner: true },
    { path: "index/add", component: NewTransaction, name: "Создание Транзакции", icon: "fa fa-credit-card", inner: true },
  ],
};
