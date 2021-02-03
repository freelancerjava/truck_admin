// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import OrdersList from './OrdersList';
import Order from './Order';
import NewOrder from './NewOrder';
import Layout from './Layout';
import ViewOrder from './ViewOrder';
import CreateOrder from './CreateOrder';
import { PageNotFound } from '../common';
import EditOrder from './EditOrder';

export default {
  path: 'orders',
  component: Layout,
  name: "Заказы",
  childRoutes: [
    { path: "", component: OrdersList, name: "Заказы", icon: "fa fa-list-ul" },
    { path: "update/:id", component: Order, name: "Редактирование заказа", icon: "fa fa-car", inner: true },
    { path: "edit/:id", component: EditOrder, name: "Редактирование заказа", icon: "fa fa-car", inner: true },
    { path: "view/:id", component: ViewOrder, name: "Просмотр заказа", icon: "fa fa-car", inner: true },
    { path: "add", component: NewOrder, name: "Заказы", icon: "fa fa-car", inner: true },
    { path: "create", component: CreateOrder, name: "Заказы", icon: "fa fa-car", inner: true },
    { path: '*', name: 'Page not found', component: PageNotFound, inner: true },
  ],
};
