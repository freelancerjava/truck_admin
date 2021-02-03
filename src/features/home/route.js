import { WelcomePage } from './';
import { PageNotFound } from '../common';

export default {
  path: '',
  childRoutes: [
    { path: 'welcome-page', component: WelcomePage, isIndex: true },
    { path: '/admin', name: 'Page not found', component: PageNotFound },
    { path: '/auth', name: 'Page not found', component: PageNotFound },
  ],
};
