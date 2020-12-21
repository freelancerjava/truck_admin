import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

export default function ViewNav({ title, parentNav }) {
  return (
    <div className='d-flex flex-column'>
      <h4 className='text-dark'>{title}</h4>
      <div className='d-flex'>
        <Link to={parentNav.url} className='text-primary mr-2'>
          {parentNav.title}
        </Link>
        <span className='text-muted'>{`${title === '' ? '' : ` > ${title}`}`}</span>
      </div>
    </div>
  );
};

ViewNav.propTypes = {};
ViewNav.defaultProps = {};
