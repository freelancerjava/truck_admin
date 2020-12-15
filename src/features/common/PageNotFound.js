import React from 'react';
import { withRouter } from 'react-router-dom';

export default withRouter(function PageNotFound({history}) {
  history.push('/admin/index')
  return <div className="common-page-not-found">Page not found.</div>;
})
