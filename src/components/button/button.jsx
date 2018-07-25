import React from 'react'
import PropTypes from 'prop-types'
import ButtonElement from './element'
import { getPadding } from './selectors'

const Button = props => (
  <ButtonElement
    {...getPadding(props)}
    appearance={props.appearance}
    disabled={props.disabled}
    full={props.full}
    is={props.type}
    onClick={props.onClick}
    style={props.style}
  >
    {props.children || props.content}
  </ButtonElement>
)

Button.propTypes = {
  /**
   * Appearances of button.
   */
  appearance: PropTypes.oneOf(['default', 'primary', 'subtle', 'danger']),
  /**
   * Text to be rendered.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Text to be rendered.
   */
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Button disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Width 100%.
   */
  full: PropTypes.bool,
  /**
   * Handler to be called when the button is clicked.
   */
  onClick: PropTypes.func,
  /**
   * Sizes of buttons.
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  /**
   * Props of theme provided by `Themer`.
   */
  style: PropTypes.object,
  /**
   * Type of button.
   */
  type: PropTypes.string,
}

Button.defaultProps = {
  appearance: 'default',
  children: null,
  content: null,
  disabled: false,
  full: false,
  onClick: () => 0,
  size: 'medium',
  style: {},
  type: 'button',
}

export default Button
