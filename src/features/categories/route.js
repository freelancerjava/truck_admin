// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
} from './';
import Layout from './Layout';
import CategoryList from './CategoryList';
import Category from './Category';
import NewCategory from './NewCategory';
import { PageNotFound } from '../common';

export default {
  path: 'categories',
  component: Layout,
  name: "Категории",
  childRoutes: [
    { path: "", component: CategoryList, name: "Категории", icon: "fa fa-car" },
    { path: "update/:id", component: Category, name: "Категория", icon: "fa fa-car", inner: true },
    { path: "add", component: NewCategory, name: "Категория", icon: "fa fa-car", inner: true },
    { path: '*', name: 'Page not found', component: PageNotFound, inner: true },
  ],
};
