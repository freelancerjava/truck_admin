// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
  Layout,
  ParksList,
  Park,
  ViewPark,
  NewPark
} from './';
import { PageNotFound } from '../common';

export default {
  path: 'park',
  component: Layout,
  childRoutes: [
    { path: "", component: ParksList, name: "Парк", icon: "fa fa-truck" },
    { path: "update/:id", component: Park, name: "Редактирование парка", icon: "fa fa-truck", inner: true },
    { path: "view/:id", component: ViewPark, name: "Редактирование парка", icon: "fa fa-truck", inner: true },
    { path: "add", component: NewPark, name: "Создание парка", icon: "fa fa-truck", inner: true },
    { path: '*', name: 'Page not found', component: PageNotFound, inner: true },
  ],
};
