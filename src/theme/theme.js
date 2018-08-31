import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import merge from 'lodash.merge'
import themeDefault from './default'

const Theme = ({ children, theme }) => {
  const themeConfig = merge(themeDefault, theme)

  return <ThemeProvider theme={themeConfig}>{children}</ThemeProvider>
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object,
}

Theme.defaultProps = {
  theme: {},
}

export default Theme
