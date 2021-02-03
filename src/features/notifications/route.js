// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
} from './';
import Layout from './Layout';
import NotificationsList from './NotificationsList';
import Notification from './Notification';
import ViewNotification from './ViewNotification';
import { PageNotFound } from '../common';

export default {
  path: 'notifications',
  component: Layout,
  childRoutes: [
    { path: "", component: NotificationsList, name: "Рассылка", icon: "fa fa-bell" },
    { path: "update/:id", component: Notification, name: "Редактирование заказа", icon: "fa fa-car", inner: true },
    { path: "view/:id", component: ViewNotification, name: "Просмотр заказа", icon: "fa fa-car", inner: true },
    { path: '*', name: 'Page not found', component: PageNotFound, inner: true },
  ],
};
