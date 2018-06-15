/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import merge from 'lodash.merge';
import configTheme from './config';
import globalStyle from './global';
import colorPrimary from './color-primary';

const Theme = ({ children, config, color }) => {
  const theme = merge(configTheme({ color: colorPrimary[color] }), config);

  globalStyle(theme);

  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
};

Theme.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['blue', 'green', 'navy', 'red']),
  config: PropTypes.object,
};

Theme.defaultProps = {
  color: 'blue',
  config: {},
};

export default Theme;
