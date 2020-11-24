// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
} from './';
import Layout from './Layout';
import Operations from './Operations';

export default {
  path: 'operations',
  component: Layout,
  name: "Мероприятия",
  childRoutes: [
    { path: "index", component: Operations, isIndex: true, name: "Мероприятия" }
  ],
};
