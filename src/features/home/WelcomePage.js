import React from 'react';
import { Link, withRouter } from 'react-router-dom';

export default withRouter(function WelcomePage({ history }) {
  return (
    <div className="home-welcome-page jumbotron">
      {/* {history.push('/admin/index')} */}
      {JSON.parse(localStorage.getItem('user')) != null && history.push('/admin/index')}
      {JSON.parse(localStorage.getItem('user')) == null && history.push('/auth/login')}*/}
      <Link to="auth/login">Войти в систему</Link>
    </div>
  );
})
