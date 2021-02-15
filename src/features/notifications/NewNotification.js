import React from 'react';
import CustomForm from '../../extrafunc/Crud/CustomForm';
import { Row, Col } from 'reactstrap';
import { updatePush, getPush, addPush } from './query';

export default function NewNotification() {
  return (
    <Row>
      <Col>
        <CustomForm
          title={`Создание Уведомления`}
          parentNav={{
            url: '/admin/notifications',
            title: 'Уведомления'
          }}
          
          mut_create_fn={addPush}
          query_key={'add push'}
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

NewNotification.propTypes = {};
NewNotification.defaultProps = {};
