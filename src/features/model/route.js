// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  NewModel
} from './';
import ModelsList from './ModelsList';
import Model from './Model';
import ViewModel from './ViewModel';
import { PageNotFound } from '../common';
import Layout from './Layout';

export default {
  path: 'model',
  component: Layout,
  childRoutes: [
    { path: "", component: ModelsList, name: "Модели", icon: "fa fa-car" },
    { path: "update/:id", component: Model, name: "Редактирование Пользователи", icon: "fa fa-user", inner: true },
    { path: "add", component: NewModel, name: "Создание Пользователи", icon: "fa fa-user", inner: true },
    { path: "view/:id", component: ViewModel, name: "Обзор пользователи", icon: "fa fa-user", inner: true },
    { path: '*', name: 'Page not found', component: PageNotFound, inner: true },
  ],
};
