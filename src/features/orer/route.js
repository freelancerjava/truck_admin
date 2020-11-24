import logroute from '../logs/route';
import operationroute from '../operations/route';
import recordroute from '../records/route';
import ReportLayout from '../report/Layout';
import { Layout, Dashboard } from './';
// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html


export default {
  path: 'orer',
  component: Layout,
  name: "Отдел РЭР",
  childRoutes: [
    {
      path: 'index',
      component: Dashboard,
      isIndex: true,
      name: "Исходное состояние"
    },
    {
      path: 'report',
      component: ReportLayout,
      name: "Расход"
    },
    logroute,
    operationroute,
    recordroute
  ],
};
