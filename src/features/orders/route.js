// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import OrdersList from './OrdersList';
import Order from './Order';
import NewOrder from './NewOrder';
import Layout from './Layout';
import ViewOrder from './ViewOrder';
import CreateOrder from './CreateOrder';

export default {
  path: 'orders',
  component: Layout,
  name: "Заказы",
  childRoutes: [
    { path: "index", component: OrdersList, isIndex: true, name: "Заказы", icon: "fa fa-list-ul" },
    { path: "index/update/:id", component: Order, name: "Редактирование заказа", icon: "fa fa-car", inner: true },
    { path: "index/view/:id", component: ViewOrder, name: "Просмотр заказа", icon: "fa fa-car", inner: true },
    { path: "index/add", component: NewOrder, name: "Заказы", icon: "fa fa-car", inner: true },
    { path: "index/create", component: CreateOrder, name: "Заказы", icon: "fa fa-car", inner: true },
  ],
};
