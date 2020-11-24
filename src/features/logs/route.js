// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import { LogItem, Layout, Logs } from './';

export default {
  path: 'logs',
  component: Layout,
  name: "Отчеты",
  childRoutes: [
    { path: '', component: Logs, isIndex: true },
    { path: ':id', component: LogItem },
  ],
};
