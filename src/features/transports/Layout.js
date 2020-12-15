import React from 'react';
// import PropTypes from 'prop-types';

export default function Layout({children}) {
  return (
    <div className="transports-layout">
      {children}
    </div>
  );
};

Layout.propTypes = {};
Layout.defaultProps = {};
