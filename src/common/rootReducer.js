import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import { connectRouter } from 'connected-react-router'
import history from './history';
import homeReducer from '../features/home/redux/reducer';
import commonReducer from '../features/common/redux/reducer';
import examplesReducer from '../features/examples/redux/reducer';
import dashboardReducer from '../features/dashboard/redux/reducer';
import otryadReducer from '../features/otryad/redux/reducer';
import logsReducer from '../features/logs/redux/reducer';
import orerReducer from '../features/orer/redux/reducer';
import headersReducer from '../features/headers/redux/reducer';
import navbarsReducer from '../features/navbars/redux/reducer';
import sidebarsReducer from '../features/sidebars/redux/reducer';
import footersReducer from '../features/footers/redux/reducer';
import authReducer from '../features/auth/redux/reducer';
import reportReducer from '../features/report/redux/reducer';
import operationsReducer from '../features/operations/redux/reducer';
import recordsReducer from '../features/records/redux/reducer';
import mapReducer from '../features/map/redux/reducer';

// NOTE 1: DO NOT CHANGE the 'reducerMap' name and the declaration pattern.
// This is used for Rekit cmds to register new features, remove features, etc.
// NOTE 2: always use the camel case of the feature folder name as the store branch name
// So that it's easy for others to understand it and Rekit could manage them.

const reducerMap = {
  router: connectRouter(history),
  home: homeReducer,
  common: commonReducer,
  examples: examplesReducer,
  dashboard: dashboardReducer,
  otryad: otryadReducer,
  logs: logsReducer,
  orer: orerReducer,
  headers: headersReducer,
  navbars: navbarsReducer,
  sidebars: sidebarsReducer,
  footers: footersReducer,
  auth: authReducer,
  report: reportReducer,
  operations: operationsReducer,
  records: recordsReducer,
  map: mapReducer,
};

export default combineReducers(reducerMap);
