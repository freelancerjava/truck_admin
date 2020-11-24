import React from "react";
import { Table } from "reactstrap";

export default function RecordsList() {
  let item = {
    head: "капитан Стрельцов А.В.",
    count_ls: 2,
    command: {
      id: "2",
      name: "32565",
    },
    position: {
      pos: {
        lat: 41.2994958,
        lng: 69.2400734,
      },
      name: "Ташкент",
    },
    start: "2020-11-07",
    end: "2020-11-07",
  };
  return (
    <Table className="align-items-center table-flush " responsive>
      <thead className="thead-light">
        <tr>
          <th rowspan="1">
            №
          </th>
          <th rowspan="1" >
            Подразделение
          </th>
          <th rowspan="1">
            Старший группы,
            <br />
            Количество л/с
          </th>
          <th rowspan="1">
            Позиционный район
            <br />
            Координаты
          </th>
          <th rowspan="1">
            Период <br />
            пребывания
          </th>
          <th rowspan="1">
            Итоги
            <br />
            за неделю
          </th>
          <th rowspan="1">
            Отчеты
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="hoverable">
          <th scope="row">{1}</th>
          <td>{item.command.name}</td>
          <td>
            <div className="d-flex align-items-center">
              <span className="mr-2">{item.head}, </span>
              <span className="mr-2">{item.count_ls}</span>
            </div>
          </td>
          <td>
            {item.position.name}, <i>({JSON.stringify(item.position.pos)})</i>
          </td>
          <td>
            {item.start} - {item.end}
          </td>
          <td>0</td>
          <td>Перейти</td>
        </tr>
        <tr className="hoverable">
          <th scope="row">{1}</th>
          <td>{item.command.name}</td>
          <td>
            <div className="d-flex align-items-center">
              <span className="mr-2">{item.head}, </span>
              <span className="mr-2">{item.count_ls}</span>
            </div>
          </td>
          <td>
            {item.position.name}, <i>({JSON.stringify(item.position.pos)})</i>
          </td>
          <td>
            {item.start} - {item.end}
          </td>
          <td>0</td>
          <td>Перейти</td>
        </tr>
      </tbody>
    </Table>
  );
}
