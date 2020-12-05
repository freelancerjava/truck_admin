// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
} from './';
import Layout from './Layout';
import CategoryList from './CategoryList';
import Category from './Category';
import NewCategory from './NewCategory';

export default {
  path: 'categories',
  component: Layout,
  name: "Категории",
  childRoutes: [
    { path: "index", component: CategoryList, isIndex: true, name: "Категории", icon: "fa fa-car" },
    { path: "index/update/:id", component: Category, name: "Категория", icon: "fa fa-car", inner: true },
    { path: "index/add", component: NewCategory, name: "Категория", icon: "fa fa-car", inner: true },
  ],
};
