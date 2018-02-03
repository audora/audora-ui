import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, injectGlobal } from 'styled-components';
import configTheme from './config';

injectGlobal`
  html {
    font-size: 16px;
  }
  body {
    background: #f1f1f1;
    font-family: Nunito,"Helvetica Neue",Helvetica,Arial,sans-serif;
    color: #393939;
    padding: 0px;
    font-size: 14px
  }
`;

const Theme = ({ children, config }) => (
  <ThemeProvider theme={Object.assign({}, configTheme, config)}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
  config: PropTypes.object
};

Theme.defaultProps = {
  config: {}
};

export default Theme;
