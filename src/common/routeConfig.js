import { App } from '../features/home';
import { PageNotFound } from '../features/common';
import homeRoute from '../features/home/route';
import commonRoute from '../features/common/route';
import examplesRoute from '../features/examples/route';
import _ from 'lodash';
import dashboardRoute from '../features/dashboard/route';
import otryadRoute from '../features/otryad/route';
import orerRoute from '../features/orer/route';
import headersRoute from '../features/headers/route';
import navbarsRoute from '../features/navbars/route';
import sidebarsRoute from '../features/sidebars/route';
import footersRoute from '../features/footers/route';
import authRoute from '../features/auth/route';
import reportRoute from '../features/report/route';
import operationsRoute from '../features/operations/route';
import recordsRoute from '../features/records/route';
import mapRoute from '../features/map/route';

// NOTE: DO NOT CHANGE the 'childRoutes' name and the declaration pattern.
// This is used for Rekit cmds to register routes config for new features, and remove config when remove features, etc.
const childRoutes = [
  homeRoute,
  commonRoute,
  examplesRoute,
  dashboardRoute,
  otryadRoute,
  orerRoute,
  headersRoute,
  navbarsRoute,
  sidebarsRoute,
  footersRoute,
  authRoute,
  reportRoute,
  operationsRoute,
  recordsRoute,
  mapRoute,
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
