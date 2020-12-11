import { App } from '../features/home';
import { PageNotFound } from '../features/common';
import homeRoute from '../features/home/route';
import commonRoute from '../features/common/route';
import examplesRoute from '../features/examples/route';
import _ from 'lodash';
import headersRoute from '../features/headers/route';
import navbarsRoute from '../features/navbars/route';
import sidebarsRoute from '../features/sidebars/route';
import footersRoute from '../features/footers/route';
import authRoute from '../features/auth/route';
import adminRoute from '../features/admin/route';
import analyseRoute from '../features/analyse/route';
import broadcastRoute from '../features/broadcast/route';
import profileRoute from '../features/profile/route';
import categoriesRoute from '../features/categories/route';
import ordersRoute from '../features/orders/route';
import transportsRoute from '../features/transports/route';

// NOTE: DO NOT CHANGE the 'childRoutes' name and the declaration pattern.
// This is used for Rekit cmds to register routes config for new features, and remove config when remove features, etc.
const childRoutes = [
  homeRoute,
  commonRoute,
  examplesRoute,
  headersRoute,
  navbarsRoute,
  sidebarsRoute,
  footersRoute,
  authRoute,
  adminRoute,
  analyseRoute,
  broadcastRoute,
  profileRoute,
  categoriesRoute,
  ordersRoute,
  transportsRoute,
];

const routes = [{
  path: '/',
  component: App,
  childRoutes: [
    ...childRoutes,
    { path: '*', name: 'Page not found', component: PageNotFound },
  ].filter(r => r.component || (r.childRoutes && r.childRoutes.length > 0)),
}];

// Handle isIndex property of route config:
//  Dupicate it and put it as the first route rule.
function handleIndexRoute(route) {
  if (!route.childRoutes || !route.childRoutes.length) {
    return;
  }

  const indexRoute = _.find(route.childRoutes, (child => child.isIndex));
  if (indexRoute) {
    const first = { ...indexRoute };
    first.path = '';
    first.exact = true;
    first.autoIndexRoute = true; // mark it so that the simple nav won't show it.
    route.childRoutes.unshift(first);
  }
  route.childRoutes.forEach(handleIndexRoute);
}

routes.forEach(handleIndexRoute);
export default routes;
