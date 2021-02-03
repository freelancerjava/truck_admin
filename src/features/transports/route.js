// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
} from './';
import { Layout } from '../categories';
import TransportsList from './TransportsList';
import Transport from './Transport';
import NewTransport from './NewTransport';
import ViewTransport from './ViewTransport';
import { PageNotFound } from '../common';

export default {
  path: 'transports',
  component: Layout,
  childRoutes: [
    { path: "", component: TransportsList, name: "Автопарк", icon: "fa fa-truck" },
    { path: "update/:id", component: Transport, name: "Редактирование транспорта", icon: "fa fa-truck", inner: true },
    { path: "view/:id", component: ViewTransport, name: "Редактирование транспорта", icon: "fa fa-truck", inner: true },
    { path: "add", component: NewTransport, name: "Создание транспорта", icon: "fa fa-truck", inner: true },
    { path: '*', name: 'Page not found', component: PageNotFound, inner: true },
  ],
};
