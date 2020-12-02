// This is the JSON way to define React Router rules in a Rekit app.
// Learn more from: http://rekit.js.org/docs/routing.html

import { Layout } from './';
import Autoreply from './Autoreply';
import Complaint from './Complaint';
import Favourite from './Favourite';
import MessagesList from './MessagesList';
import Offer from './Offer';
import Question from './Question';
import Review from './Review';

export default {
  path: 'messages',
  component: Layout,
  name: "Сообщения",
  childRoutes: [
    {icon: "fa fa-envelope", path: "index", component: MessagesList, isIndex: true, name: "Все сообщения"},
    {icon: "fa fa-thumbs-down", path: "complaint", component: Complaint, name: "Жалобы"},
    {icon: "fa fa-smile", path: "offer", component: Offer, name: "Предложения"},
    {icon: "fa fa-thumbs-up", path: "review", component: Review, name: "Отзывы"},
    {icon: "fa fa-question-circle", path: "question", component: Question, name: "Вопросы"},
    {icon: "fa fa-bookmark", path: "favourite", component: Favourite, name: "Избранные"},
    {icon: "fa fa-recycle", path: "autoreply", component: Autoreply, name: "Автоответчик"},
  ],
};
