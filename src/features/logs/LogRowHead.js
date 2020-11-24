import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';

export default function LogRowHead() {
  return (
    <thead className="thead-light">
      <tr>
        <th scope="col" rowspan="1">№</th>
        <th scope="col" rowspan="1">Подразделение</th>
        <th scope="col" rowspan="1">Старший группы,<br />Количество л/с</th>
        <th scope="col" rowspan="1">Позиционный район<br />Координаты</th>
        <th scope="col" rowspan="1">Период <br />пребывания</th>
        <th scope="col" rowspan="1">Итоги<br />за неделю</th>
        <th scope="col" rowspan="1">Отчеты</th>
      </tr>
    </thead>
  );
};

LogRowHead.propTypes = {};
LogRowHead.defaultProps = {};
