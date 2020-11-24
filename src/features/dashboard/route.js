// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
} from './';
import Dashboard from './Dashboard';
import Index from './views/Index';
import Icons from './views/examples/Icons';
import Maps from './views/examples/Maps';
import Profile from './views/examples/Profile';
import Tables from './views/examples/Tables';
import Login from './views/examples/Login';
import Register from './views/examples/Register';
import Auth from './layouts/Auth';
import Reports from './views/examples/reports';
import SectionLayout from './layouts/SectionLayout';
import Logs from './views/examples/logs';

export default {
  path: 'dashboard',
  component: Dashboard,
  childRoutes: [
    {
      path: "/index",
      name: "Dashboard",
      icon: "ni ni-tv-2 text-primary",
      component: Index,
      isIndex: true,
      layout: "/dashboard"
    },
    {
      path: "/icons",
      name: "Icons",
      icon: "ni ni-planet text-blue",
      component: Icons,
      layout: "/dashboard"
    },
    {
      path: "/maps",
      name: "Maps",
      icon: "ni ni-pin-3 text-orange",
      component: Maps,
      layout: "/dashboard"
    },
    {
      path: "/user-profile",
      name: "User Profile",
      icon: "ni ni-single-02 text-yellow",
      component: Profile,
      layout: "/dashboard"
    },
    {
      path: "/tables",
      name: "Tables",
      icon: "ni ni-bullet-list-67 text-red",
      component: Tables,
      layout: "/dashboard"
    },
    {
      path: "/reports",
      name: "Reports",
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
  ],
};

export const sectionRoute = {
  path: "/section",
  component: SectionLayout,
  childRoutes: [
    {
      path: "/index",
      component: Tables,
      layout: "/section"
    }
  ]
}

export const authRoute = {
  path: "/auth",
  component: Auth,
  childRoutes: [
    {
      path: "/login",
      component: Login,
      layout: "/auth"
    },
    {
      path: "/register",
      component: Register,
      layout: "/auth"
    }
  ]
}
