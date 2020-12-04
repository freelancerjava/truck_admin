// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
} from './';
import Layout from './Layout';
import CategoryList from './CategoryList';

export default {
  path: 'categories',
  component: Layout,
  childRoutes: [
    { path: "index", component: CategoryList, isIndex: true, name: "Категории", icon: "fa fa-car" },
    { path: "list", component: CategoryList, isIndex: true, name: "Категории", icon: "fa fa-car" }
  ],
};
