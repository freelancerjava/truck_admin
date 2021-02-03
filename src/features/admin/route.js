// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import Dashboard from "./Dashboard";
import Layout from "./Layout";
import categoriesroute from "../categories/route";
import ordersroute from "../orders/route";
import transportsroute from "../transports/route";
import usersroute from "../users/route";
import { PageNotFound } from "../common";
import transactionsroute from "../transactions/route";
import chatsroute from "../chats/route";
import notificationsroute from "../notifications/route";
import modelroute from "../model/route";
import makeroute from "../make/route";

export default {
  path: "admin",
  component: Layout,
  childRoutes: [
    { icon: "fa fa-home", path: "dashboard", component: Dashboard, name: "Главная" },
    categoriesroute,
    ordersroute,
    transportsroute,
    usersroute,
    transactionsroute,
    chatsroute,
    notificationsroute,
    modelroute,
    makeroute,
    { path: '*', name: 'Page not found', component: PageNotFound, inner: true },
  ],
};
