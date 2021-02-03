import React from 'react';
import { getModels } from '../../axios/query';
import { delModel, getCount } from './query';
import { Row, Col } from 'reactstrap';
import ListTable from '../../extrafunc/Crud/ListTable';
// import PropTypes from 'prop-types';

export default function ModelsList() {
  return (
    <Row>
      <Col>
        <ListTable
          mut_delete_fn={delModel}
          query_fn={getModels}
          cnt_query_fn={getCount}
          query_key={"model"}
          title={"Лист моделей"}
          add_link={"/admin/model/add"}
          edit_link={"/admin/model/update"}
          // view_link={"/admin/model/view"}
          query_filter={{ include: ['make'] }}
          id={"id"}
          headers={
            [
              {
                name: 'ID',
                key: 'id',
                sort: 'id',
              },
              {
                name: 'Название',
                keys: [
                  'name'
                ],
                sort: 'name'
              },
              {
                name: 'Марка',
                keys: [
                  'make.name'
                ],
                sort: 'makeId'
              },
            ]
          }
        />
      </Col>
    </Row>
  );
};

ModelsList.propTypes = {};
ModelsList.defaultProps = {};
