// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
} from './';
import { Layout } from '../categories';
import TransportsList from './TransportsList';
import Transport from './Transport';
import NewTransport from './NewTransport';

export default {
  path: 'transports',
  component: Layout,
  childRoutes: [
    { path: "index", component: TransportsList, isIndex: true, name: "Автопарк", icon: "fa fa-truck" },
    { path: "index/update/:id", component: Transport, name: "Редактирование транспорта", icon: "fa fa-truck", inner: true },
    { path: "index/add", component: NewTransport, name: "Создание транспорта", icon: "fa fa-truck", inner: true },
  ],
};
