import React from 'react';
import { getMakes } from '../../axios/query';
import { delMake, getCount } from './query';
import { Row, Col } from 'reactstrap';
import ListTable from '../../extrafunc/Crud/ListTable';
// import PropTypes from 'prop-types';

export default function MakesList() {
  return (
    <Row>
      <Col>
        <ListTable
          mut_delete_fn={delMake}
          query_fn={getMakes}
          cnt_query_fn={getCount}
          query_key={"make"}
          title={"Лист моделей"}
          add_link={"/admin/make/add"}
          edit_link={"/admin/make/update"}
          // view_link={"/admin/make/view"}
          query_filter={{ include: [] }}
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
            ]
          }
        />
      </Col>
    </Row>
  );
};

MakesList.propTypes = {};
MakesList.defaultProps = {};
