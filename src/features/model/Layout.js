import React from 'react';
// import PropTypes from 'prop-types';

export default function Layout({children}) {
  return (
    <div className="model-layout">
      {children}
    </div>
  );
};

Layout.propTypes = {};
Layout.defaultProps = {};
