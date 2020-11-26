import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export default withRouter(function WelcomePage({history}) {
  return (
    <div className="home-welcome-page jumbotron">
      {JSON.parse(localStorage.getItem('user')) && history.push('/admin/index')}
      <Link to="auth/login">Войти в систему</Link>
    </div>
  );
})
