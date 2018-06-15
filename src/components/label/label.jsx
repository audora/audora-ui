import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lighten } from '../../utils'
import configTheme from '../../theme/config'

const Container = styled.label`
  font-weight: ${({ theme: { label } }) => label.font.weight};
  font-size: ${({ theme: { label } }) => label.font.size};
  color: ${({ disabled, theme: { label } }) =>
    disabled ? lighten(label.color, 0.7) : label.color};
`

Container.defaultProps = { theme: configTheme({}) }

const Label = ({ content, disabled }) => (
  <Container disabled={disabled}>{content}</Container>
)

Label.propTypes = {
  /**
   * Text to be rendered.
   */
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Disable label.
   */
  disabled: PropTypes.bool,
}

Label.defaultProps = {
  disabled: false,
  content: null,
}

export default Label
