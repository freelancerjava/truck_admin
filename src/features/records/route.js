// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import { Layout, Records } from './';

export default {
  path: 'records',
  name: "Ежедневные записи",
  component: Layout,
  childRoutes: [
    { path: 'index', component: Records, isIndex: true },
  ],
};
