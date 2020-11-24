import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/css/argon-dashboard-react.css";

import AdminLayout from "./layouts/Admin.js";
import AuthLayout from "./layouts/Auth.js";
import { strapi } from '../../axios';
import SectionLayout from './layouts/SectionLayout';

export default function Dashboard() {
  const [token, setToken] = useState(localStorage.getItem('jwt'))
  return (
    <div className="dashboard-dashboard">
      <BrowserRouter>
        <Switch>
          <Route path="/otryad" render={props => <AdminLayout {...props} token={token} />} />
          <Route path="/auth" render={props => <AuthLayout {...props} />} />
          <Redirect from="/" to="/otryad/index" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

Dashboard.propTypes = {};
Dashboard.defaultProps = {};
