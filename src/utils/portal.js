import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Portal = ({ content, query }) =>
  ReactDOM.createPortal(content, document.querySelector(query));

Portal.propTypes = {
  content: PropTypes.node.isRequired,
  query: PropTypes.string
};

Portal.defaultProps = {
  query: 'body'
};

export default Portal;
