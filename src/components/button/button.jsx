import React from 'react'
import PropTypes from 'prop-types'
import ButtonElement from './element'
import { getPadding } from './selectors'

const Button = ({
  variant,
  children,
  content,
  disabled,
  full,
  size,
  ...rest
}) => {
  const buttonProps = {
    variant,
    disabled,
    full,
    ...getPadding(size),
    ...rest,
  }

  return <ButtonElement {...buttonProps}>{children || content}</ButtonElement>
}

Button.propTypes = {
  /**
   * variants of button.
   */
  variant: PropTypes.oneOf(['default', 'primary', 'subtle', 'danger']),
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
   * Sizes of buttons.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

Button.defaultProps = {
  variant: 'default',
  children: null,
  content: null,
  disabled: false,
  full: false,
  size: 'medium',
}

export default Button
