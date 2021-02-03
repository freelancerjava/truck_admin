
import React from 'react';
import ListTable from '../../extrafunc/Crud/ListTable';
import { Container, Row, Col } from 'reactstrap';
import { getCount, getPushes } from './query';
// import PropTypes from 'prop-types';

export default function NotificationsList() {
  return (
    <Row>
      <Col>
        <ListTable
          cnt_query_fn={getCount}
          query_fn={getPushes}
          query_key={"pushes"}
          title={"Список рассылок"}
          add_link={"/admin/notifications/add"}
          edit_link={"/admin/notifications/update"}
          view_link={"/admin/notifications/view"}
          query_filter={{ where: { type: 'news' } }}
          // filters={{
          //   field: 'status',
          //   data: [
          //     { key: 0, name: 'Новые', value: 'new' },
          //     { key: 1, name: 'Принятые', value: 'arrived' },
          //     { key: 2, name: 'Выполняются', value: 'on_the_way' },
          //     { key: 3, name: 'Завершенные', value: 'completed' },
          //     { key: 4, name: 'Закрытые', value: 'closed' },
          //     { key: 5, name: 'Отмененные', value: 'canceled' },
          //     { key: 6, name: 'Все'},
          //   ]
          // }}
          // innerFilters={{
          //   field: 'type',
          //   data: [
          //     { key: 0, name: 'Все' },
          //     { key: 1, name: 'Грузоперевозки', value: 'cargo' },
          //     { key: 2, name: 'Аренда', value: 'rent' },
          //   ]
          // }}
          id={"id"}
          headers={
            [
              {
                name: "ID",
                key: 'id',
                sort: 'id'
              },
              {
                name: "Тип",
                key: 'type',
                sort: 'type'
              },
              {
                name: "Сообщение",
                key: 'message_ru',
                sort: 'message_ru'
              },
              {
                name: "Дата",
                key: 'createdAt',
                type: 'datentime',
                sort: 'createdAt'
              },

            ]
          }
        />
      </Col>
    </Row>
  );
};

NotificationsList.propTypes = {};
NotificationsList.defaultProps = {};
