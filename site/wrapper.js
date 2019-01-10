import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '../src'

const Wrapper = ({ children }) => <ThemeProvider>{children}</ThemeProvider>

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
