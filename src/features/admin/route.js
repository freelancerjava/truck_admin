// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import messagesroute from "../messages/route";
import Dashboard from "./Dashboard";
import Layout from "./Layout";

export default {
  path: "admin",
  component: Layout,
  childRoutes: [
    { icon: "fa fa-home", path: "index", component: Dashboard, isIndex: true, name: "Обзор" },
    messagesroute,
  ],
};
