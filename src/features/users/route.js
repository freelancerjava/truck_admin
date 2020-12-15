// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
} from './';
import Layout from './Layout';
import UserList from './UserList';
import User from './User';
import NewUser from './NewUser';

export default {
  path: 'users',
  component: Layout,
  childRoutes: [
    { path: "index", component: UserList, isIndex: true, name: "Пользователи", icon: "fa fa-users" },
    { path: "index/update/:id", component: User, name: "Редактирование Пользователи", icon: "fa fa-user", inner: true },
    { path: "index/add", component: NewUser, name: "Создание Пользователи", icon: "fa fa-user", inner: true },
  ],
};
