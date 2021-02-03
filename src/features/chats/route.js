// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import {
} from './';
import ChatsList from './ChatsList';
import Chat from './Chat';
import ViewChat from './ViewChat';
import Layout from './Layout';
import { PageNotFound } from '../common';

export default {
  path: 'chats',
  component: Layout,
  childRoutes: [
    { path: "", component: ChatsList, name: "Чаты", icon: "fa fa-comment-dots" },
    { path: "update/:id", component: Chat, name: "Редактирование заказа", icon: "fa fa-car", inner: true },
    { path: "view/:id", component: ViewChat, name: "Просмотр заказа", icon: "fa fa-car", inner: true },
    { path: '*', name: 'Page not found', component: PageNotFound, inner: true },
  ],
};
