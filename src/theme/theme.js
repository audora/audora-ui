import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import merge from 'lodash.merge'
import themeDefault from './default'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${props => props.theme.fonts.sans};
  }
`

const Theme = ({ children, theme }) => {
  const themeConfig = merge(themeDefault, theme)

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
