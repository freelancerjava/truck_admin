import React from 'react';
// import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return (
    <div className="transactions-layout">
      {children}
    </div>
  );
};

Layout.propTypes = {};
Layout.defaultProps = {};
