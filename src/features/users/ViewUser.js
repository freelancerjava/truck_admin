import React, { useState, useEffect } from 'react';
import ViewClient from './ViewClient';
import { useHistory } from 'react-router-dom';
import { getUser } from './query';
import { useQuery } from 'react-query';
import ViewDriver from './ViewDriver';
// import PropTypes from 'prop-types';

export default function ViewUser() {
  const history = useHistory()
  const id = history.location.pathname.split('view/')[1]
  const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)

    const querydata = useQuery(['user', { id: id }], getUser)
    useEffect(() => {
        if (querydata.data) {
            setData(querydata.data)
        } else {
            setData(null)
        }
    }, [querydata.data]);
  return (
    <div className="users-view-user">
      {console.log(data)}
      {data && data.realm === 'client' ? <ViewClient accData={data || {}}/> : <></>}
      {data && data.realm === 'driver' ? <ViewDriver accData={data || {}}/> : <></>}
    </div>
  );
};

ViewUser.propTypes = {};
ViewUser.defaultProps = {};
