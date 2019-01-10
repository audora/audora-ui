import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import themeDefault from './default'
import { mergeDeep } from '../utils'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary[0]};
    font-size: inherit;
  }
  body {
    position: relative;
    min-height: 100%;
    margin: 0;
    padding-bottom: 0;
    font-family: ${({ theme }) => theme.fonts.sans};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  html, body {
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
  }
`

const Theme = ({ children, theme }) => {
  const themeConfig = mergeDeep(themeDefault, theme)

  return (
    <ThemeProvider theme={themeConfig}>
      <Fragment>
        <GlobalStyle />
        {children}
      </Fragment>
    </ThemeProvider>
  )
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object,
}

Theme.defaultProps = {
  theme: {},
}

export default Theme
