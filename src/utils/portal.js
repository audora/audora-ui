import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Portal = ({ render, query }) =>
  ReactDOM.createPortal(render, document.querySelector(query));

Portal.propTypes = {
  render: PropTypes.node.isRequired,
  query: PropTypes.string
};

Portal.defaultProps = {
  query: 'body'
};

export default Portal;
