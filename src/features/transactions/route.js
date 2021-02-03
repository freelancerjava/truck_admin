// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  Layout,
  TransactionsList,
  Transaction,
  NewTransaction
} from './';
import { PageNotFound } from '../common';
import TransactionView from './TransactionView';

export default {
  path: 'transactions',
  component: Layout,
  childRoutes: [
    { path: "", component: TransactionsList, name: "Транзакции", icon: "fa fa-credit-card" },
    { path: "update/:id", component: Transaction, name: "Редактирование Транзакции", icon: "fa fa-credit-card", inner: true },
    { path: "view/:id", component: TransactionView, name: "Редактирование Транзакции", icon: "fa fa-credit-card", inner: true },
    { path: "add", component: NewTransaction, name: "Создание Транзакции", icon: "fa fa-credit-card", inner: true },
    { path: '*', name: 'Page not found', component: PageNotFound, inner: true },
  ],
};
