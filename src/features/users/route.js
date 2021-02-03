// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import Layout from './Layout';
import UserList from './UserList';
import User from './User';
import NewUser from './NewUser';
import { PageNotFound } from '../common';
import ViewUser from './ViewUser';

export default {
  path: 'users',
  component: Layout,
  childRoutes: [
    { path: "", component: UserList, name: "Пользователи", icon: "fa fa-users" },
    { path: "update/:id", component: User, name: "Редактирование Пользователи", icon: "fa fa-user", inner: true },
    { path: "add", component: NewUser, name: "Создание Пользователи", icon: "fa fa-user", inner: true },
    { path: "view/:id", component: ViewUser, name: "Обзор пользователи", icon: "fa fa-user", inner: true },
    { path: '*', name: 'Page not found', component: PageNotFound, inner: true },
  ],
};
