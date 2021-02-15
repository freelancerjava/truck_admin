import React from 'react';
import CustomForm from '../../extrafunc/Crud/CustomForm';
import { Row, Col } from 'reactstrap';
import { updatePush, getPush } from './query';
import { useHistory } from 'react-router-dom';
import CustomView from '../../extrafunc/Crud/CustomView';

export default function ViewNotification() {
  const history = useHistory()
  const id = history.location.pathname.split("view/")[1]
  return (
    <Row>
      <Col>
        <CustomView
          title={`Уведомление ${id}`}
          parentNav={{
            url: '/admin/notifications',
            title: 'Уведомления'
          }}
          edit_link={`/admin/notifications/update/${id}`}
          id={id}
          query_fn={getPush}
          mut_update_fn={updatePush}
          query_key={'push'}
          array_fields={true}
          fields={
            [
              [
                [
                  {
                    name: "Наименование uz",
                    key: 'message_uz',
                    type: {
                      name: 'text'
                    }
                  },
                  {
                    name: "Наименование ru",
                    key: 'message_ru',
                    type: {
                      name: 'text'
                    }
                  },
                  {
                    name: "Наименование en",
                    key: 'message_en',
                    type: {
                      name: 'text'
                    }
                  },
                  {
                    name: "Наименование hr",
                    key: 'message_hr',
                    type: {
                      name: 'text'
                    }
                  },
                ],

              ]
            ]
          }
        />
      </Col>
    </Row>
  );
};

ViewNotification.propTypes = {};
ViewNotification.defaultProps = {};
