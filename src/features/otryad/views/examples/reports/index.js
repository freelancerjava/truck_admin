import React, { useState, useEffect } from 'react';
import Header from '../../../components/Headers/Header';


// reactstrap components
import {
    Container,
    Row
} from "reactstrap";
import ReportHeader from '../../../components/Headers/ReportHeader';
import { Field, Form } from 'react-final-form';
import { createReport, getRepcats, getReportsByGq, getReportByGq } from '../../../query';
import { useMutation, useQuery } from 'react-query';
import ReportsList from './ReportsList';
import ReportForm from './ReportForm';

const Reports = () => {

    const ltu = localStorage.getItem('user');
    const [user, setuser] = useState(JSON.parse(ltu) || {})
    const [repcat, setrepcat] = useState([])


    const repcatdata = useQuery("repcats", getRepcats)


    useEffect(() => {
        setuser(JSON.parse(ltu))

        if (repcatdata.data) {
            setrepcat(repcatdata.data.map((item) => {
                return item
            }))
        } else {
            setrepcat([])
        }
    }, [ltu, repcatdata.data]);



    return <>
        <ReportHeader user={user} />
        {/* Page content */}
        <Container className="mt-7" fluid>
            {/* Table */}
            <Row>
                <div className="col">
                    <ReportForm user={user} />
                </div>
            </Row>
            {/* Dark table */}
        </Container>
    </>
}

export default Reports;