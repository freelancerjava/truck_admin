import React from 'react';
import { Link } from 'react-router-dom';
const LogRow = ({ item, index, ...props }) => {
  return (
    <tr {...props} className="hoverable">
      <th scope="row">{index + 1}</th>
      <td>{item.command.name}</td>
      <td>
        <div className="d-flex align-items-center">
          <span className="mr-2">{item.head}, </span>
          <span className="mr-2">{item.count_ls}</span>
        </div>
      </td>
      <td>{item.position.name}, <i>({JSON.stringify(item.position.pos)})</i></td>
      <td>{item.start} - {item.end}</td>
      <td>0</td>
      <td><Link to={`logs/${item.id}`}>Перейти</Link></td>
    </tr>
  );
};

export default LogRow 