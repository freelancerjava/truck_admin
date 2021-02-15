import Dashboard from "./Dashboard";
import Layout from "./Layout";
import categoriesroute from "../categories/route";
import partnerorderroute from "../orders/partnerorderroute";
import partnertransportsroute from "../transports/partnertransportroute";
import partnerusersroute from "../users/partneruserroute";
import { PageNotFound } from "../common";
import transactionsroute from "../transactions/route";
import chatsroute from "../chats/route";
import notificationsroute from "../notifications/route";
import modelroute from "../model/route";
import makeroute from "../make/route";
import PartnerUserList from "../users/PartnerUserList";

export default {
  path: "partner",
  component: Layout,
  childRoutes: [
    { icon: "fa fa-home", path: "dashboard", component: Dashboard, name: "Главная" },
    // categoriesroute,
    partnerorderroute,
    partnertransportsroute,
    partnerusersroute,
    transactionsroute,
    chatsroute,
    notificationsroute,
    // modelroute,
    // makeroute,
    { path: '*', name: 'Page not found', component: PageNotFound, inner: true },
  ],
};