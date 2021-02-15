import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { getUsers } from '../users/query'
import { user } from '../../axios';

export default withRouter(function WelcomePage({ history }) {
  // const data = getUsers()

  // console.log(data.data == null || data.error);

  return (
    <div className="home-welcome-page jumbotron">
      {/* {getUsers()} */}
      {/* {(data.data == null || data.error) && (window.location = '/auth/login')} */}
      {/* {history.push('/admin/index')} */}
      {JSON.parse(user) != null && JSON.parse(user).user.realm === 'admin' ? history.push('/admin/index') :
        JSON.parse(user) != null && JSON.parse(user).user.realm === 'partner_admin' ? history.push('/partner/index') :
          JSON.parse(user) == null && history.push('/auth/login')}
      <Link to="auth/login">Войти в систему</Link>
    </div>
  );
})
