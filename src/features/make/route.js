// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
} from './';
import MakesList from './MakesList';
import Make from './Make';
import NewMake from './NewMake';
import ViewMake from './ViewMake';
import { PageNotFound } from '../common';
import Layout from './Layout';

export default {
  path: 'make',
  component: Layout,
  childRoutes: [
    { path: "", component: MakesList, name: "Марки", icon: "fa fa-car" },
    { path: "update/:id", component: Make, name: "Редактирование Пользователи", icon: "fa fa-user", inner: true },
    { path: "add", component: NewMake, name: "Создание Пользователи", icon: "fa fa-user", inner: true },
    { path: "view/:id", component: ViewMake, name: "Обзор пользователи", icon: "fa fa-user", inner: true },
    { path: '*', name: 'Page not found', component: PageNotFound, inner: true },
  ],
};
