/* eslint-disable */

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider, injectGlobal } from 'styled-components';
import merge from 'lodash.merge';
import configTheme from './config';

const Theme = ({ children, config }) => {
  const theme = merge(configTheme, config);

  injectGlobal`
    * {
      box-sizing: border-box;
    }
    html {
      font-family: sans-serif;
    }
    body {
      background: ${theme.color.bodyBackground};
      color: ${theme.color.text};
      font-family: ${theme.fontFamily};
      font-size: ${theme.fontSize.md};
      line-height: ${theme.lineHeight};
      margin: 0px;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit;
      font-size: inherit;
      margin: 0;
    }
    button,
    input {
      overflow: visible;
    }
    button,
    select {
      text-transform: none;
    }
    button,
    html [type="button"],
    [type="reset"],
    [type="submit"] {
      -webkit-appearance: button;
    }
    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }
    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
      outline: 1px dotted ButtonText;
    }
    textarea {
      overflow: auto;
    }
    [type="checkbox"],
    [type="radio"] {
      box-sizing: border-box;
      padding: 0;
    }
    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
      height: auto;
    }
  `;

  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
};

Theme.propTypes = {
  children: PropTypes.node.isRequired,
  config: PropTypes.object,
};

Theme.defaultProps = {
  config: {},
};

export default Theme;
