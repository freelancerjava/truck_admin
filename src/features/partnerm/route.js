// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
} from './';
import PartnersList from './PartnersList';
import Partner from './Partner';
import NewPartner from './NewPartner';
import ViewPartner from './ViewPartner';
import { PageNotFound } from '../common';
import Layout from './Layout';

export default {
  path: 'partnerm',
  component: Layout,
  childRoutes: [
    { path: "", component: PartnersList, name: "Парнеры", icon: "fa fa-user" },
    { path: "update/:id", component: Partner, name: "Редактирование Пользователи", icon: "fa fa-user", inner: true },
    { path: "add", component: NewPartner, name: "Создание Пользователи", icon: "fa fa-user", inner: true },
    { path: "view/:id", component: ViewPartner, name: "Обзор пользователи", icon: "fa fa-user", inner: true },
    { path: '*', name: 'Page not found', component: PageNotFound, inner: true },
  ],
};
