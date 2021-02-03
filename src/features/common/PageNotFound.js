import React from 'react';
import { withRouter } from 'react-router-dom';

export default withRouter(function PageNotFound({history}) {
  const ltu = JSON.parse(localStorage.getItem('user'))
  ltu && ltu.id ? history.push('/admin/dashboard') : history.push('/auth/login')
  return <div className="common-page-not-found">Page not found.</div>;
})
