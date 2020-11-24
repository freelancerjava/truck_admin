
import Index from "./views/Index.js";
import Profile from "./views/examples/Profile.js";
import Maps from "./views/examples/Maps.js";
import Register from "./views/examples/Register.js";
import Login from "./views/examples/Login.js";
import Tables from "./views/examples/Tables.js";
import Icons from "./views/examples/Icons.js";
import Reports from "./views/examples/reports";
import Logs from "./views/examples/logs/index.js";

var routes = [
  {
    path: "/index",
    name: "Исходное состояние",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/dashboard"
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "ni ni-planet text-blue",
  //   component: Icons,
  //   layout: "/dashboard"
  // },
  {
    path: "/maps",
    name: "Геоданные",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/dashboard"
  },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: "ni ni-single-02 text-yellow",
  //   component: Profile,
  //   layout: "/dashboard"
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: "ni ni-bullet-list-67 text-red",
  //   component: Tables,
  //   layout: "/dashboard"
  // },
  {
    path: "/reports",
    name: "Расходы",
    icon: "ni ni-bullet-list-67 text-red",
    component: Reports,
    layout: "/dashboard"
  },
  {
    path: "/logs",
    name: "Отчеты",
    icon: "ni ni-bullet-list-67 text-red",
    component: Logs,
    layout: "/dashboard"
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "ni ni-key-25 text-info",
  //   component: Login,
  //   layout: "/auth"
  // },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth"
  // }
];
export default routes;
