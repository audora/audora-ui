/* eslint-disable */

import { injectGlobal } from 'styled-components';

export default theme => {
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
    pre, code, sub, sup, fieldset, form, label, legend, details, embed, menu, summary, table, tbody, tfoot, thead, tr, th, td {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      vertical-align: baseline;
    }
    strong, b {
      font-weight: bold;
    }
    i, cite, em, var, address, dfn {
      font-style: italic;
    }
    a {
      color: ${theme.color.primary};
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
    a:focus {
      outline: 2px solid ${theme.color.primary};
      outline-offset: 2px;
    }
    code {
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      color: #d14;
      display: inline-block;
      font-family: ${theme.codeFontFamily};
      font-size: 14px;
      white-space: pre-wrap;
    }
    blockquote, dl, form, h1, h2, h3, h4, h5, h6, ol, p, pre, table, ul {
      margin: 12px 0 0;
    }
    article {
      font-size: 14px;
      line-height: 24px;
      font-weight: 400;
      padding-bottom: 48px;
    }
    h1, h2, h3, h4, h5, h6, p, blockquote, figure, ol, ul, caption, dl, dt, dd, ol, ul, li {
      margin: 0;
      padding: 0;
    }
    .h1, h1 {
      font-size: 28px;
      font-weight: 500;
      line-height: 32px;
    }
    .h2, h2 {
      font-size: 22px;
      font-weight: 500;
      line-height: 28px;
    }
    .h3, h3 {
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
    }
    .h4, h4 {
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
    }
    .h5, h5 {
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
    }
    .h6, h6 {
      font-size: 12px;
      font-weight: 600;
      line-height: 16px;
      text-transform: uppercase;
    }
  `;
};
