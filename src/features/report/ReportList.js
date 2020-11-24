import React, {
  useEffect,
  useState
} from 'react';
import {
  useQuery
} from 'react-query';
import moment from 'moment';


import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Row,
  Table,
  UncontrolledDropdown,
  UncontrolledTooltip
} from "reactstrap";
import {
  getReportsByGq
} from './query';
import {
  TimeNav
} from '../../extrafunc/Timenav';

export const ReportsList = () => {
  const [startDate, setStartDate] = useState(new Date(moment().format('MMM DD, YYYYY')));
  const today = moment().dayOfYear() == moment(startDate).dayOfYear()

  const [reports, setreports] = useState([])

  const repdata = useQuery(["reports", {
    date: moment(startDate).format("YYYY-MM-DD")
  }], getReportsByGq)

  useEffect(() => {
    if (repdata.data) {
      setreports(repdata.data.reports.map((item) => {
        return item
      }))
    } else {
      setreports([])
    }
  }, [repdata.data]);

  return (
    <Card className="shadow" >
      <CardHeader className="border-0" >
        <h3 className="mb-0" > Расход подчиненных подразделений </h3> </CardHeader >
      <TimeNav today={today} startDate={startDate} setStartDate={setStartDate} />
      <Table className="align-items-center table-flush" responsive >
        <thead className="thead-light" >
          <tr >
            <th scope="col" > Наименование < br /> подразделения </th>
            <th scope="col" > Дежурный </th>
            <th scope="col" > Помощник </th>
            <th scope="col" > По списку </th>
            <th scope="col" > На лицо </th>
            <th scope="col" > Командировка </th>
            <th scope="col" > Отпуск </th>
            <th scope="col" > Госпиталь </th>
            <th scope="col" > Домашний<br />Карантин </th>
            <th scope="col" />
          </tr>
        </thead >
        <tbody >
          {(reports.length > 0) ?
            reports.map((item) => {
              return (< tr className="row-transition">
                < th scope="row" > {item.command.name} </th>
                < td >{item.dej} </td>
                < td >{item.dej_pom}</td >
                < td >{item.royxat_boyicha}</td>
                < td >{item.safda}</td>
                < td >{item.safar}</td>
                < td >{item.tatil}</td>
                < td >{item.gospital}</td>
                < td >{item.uy_karantin}</td>
              </tr>
              )
            }) :
            <tr>
              <div className="p-2 d-flex justify-content-center">
                Пусто
                            </div>
            </tr>
          }
        </tbody>
      </Table >
      <CardFooter className="py-4" >
        <nav aria-label="..." >
          <Pagination className="pagination justify-content-end mb-0"
            listClassName="justify-content-end mb-0" >
            <PaginationItem className="disabled" >
              <PaginationLink href="#pablo"
                onClick={e => e.preventDefault()}
                tabIndex="-1" >
                <i className="fas fa-angle-left" />
                <span className="sr-only" > Previous </span> </PaginationLink >
            </PaginationItem>
            <PaginationItem className="active" >
              <PaginationLink href="#pablo" onClick={e => e.preventDefault()} >
                1 </PaginationLink>
            </PaginationItem >
            <PaginationItem >
              <PaginationLink href="#pablo" onClick={e => e.preventDefault()} >
                2 < span className="sr-only" > (current) </span> </PaginationLink >
            </PaginationItem>
            <PaginationItem >
              <PaginationLink href="#pablo"
                onClick={e => e.preventDefault()} >
                3 </PaginationLink>
            </PaginationItem >
            <PaginationItem >
              <PaginationLink href="#pablo"
                onClick={e => e.preventDefault()} >
                <i className="fas fa-angle-right" />
                <span className="sr-only" > Next </span> </PaginationLink >
            </PaginationItem>
          </Pagination >
        </nav>
      </CardFooter >
    </Card>
  );
}

export default ReportsList;