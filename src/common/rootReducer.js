import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import { connectRouter } from 'connected-react-router'
import history from './history';
import homeReducer from '../features/home/redux/reducer';
import commonReducer from '../features/common/redux/reducer';
import examplesReducer from '../features/examples/redux/reducer';
import headersReducer from '../features/headers/redux/reducer';
import navbarsReducer from '../features/navbars/redux/reducer';
import sidebarsReducer from '../features/sidebars/redux/reducer';
import footersReducer from '../features/footers/redux/reducer';
import authReducer from '../features/auth/redux/reducer';
import adminReducer from '../features/admin/redux/reducer';
import analyseReducer from '../features/analyse/redux/reducer';
import broadcastReducer from '../features/broadcast/redux/reducer';
import profileReducer from '../features/profile/redux/reducer';
import categoriesReducer from '../features/categories/redux/reducer';
import ordersReducer from '../features/orders/redux/reducer';
import transportsReducer from '../features/transports/redux/reducer';
import usersReducer from '../features/users/redux/reducer';
import elementsReducer from '../features/elements/redux/reducer';
import transactionsReducer from '../features/transactions/redux/reducer';

// NOTE 1: DO NOT CHANGE the 'reducerMap' name and the declaration pattern.
// This is used for Rekit cmds to register new features, remove features, etc.
// NOTE 2: always use the camel case of the feature folder name as the store branch name
// So that it's easy for others to understand it and Rekit could manage them.

const reducerMap = {
  router: connectRouter(history),
  home: homeReducer,
  common: commonReducer,
  examples: examplesReducer,
  headers: headersReducer,
  navbars: navbarsReducer,
  sidebars: sidebarsReducer,
  footers: footersReducer,
  auth: authReducer,
  admin: adminReducer,
  analyse: analyseReducer,
  broadcast: broadcastReducer,
  profile: profileReducer,
  categories: categoriesReducer,
  orders: ordersReducer,
  transports: transportsReducer,
  users: usersReducer,
  elements: elementsReducer,
  transactions: transactionsReducer,
};

export default combineReducers(reducerMap);
