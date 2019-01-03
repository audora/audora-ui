import React from 'react'
import PropTypes from 'prop-types'
import InputElement from './element'
import { getPadding } from './selectors'

const Input = ({
  disabled,
  full,
  onChange,
  style,
  type,
  size,
  placeholder,
}) => (
  <InputElement
    {...getPadding(size)}
    placeholder={placeholder}
    type={type}
    disabled={disabled}
    full={full}
    onChange={onChange}
    style={style}
  />
)

Input.propTypes = {
  /**
   * Input placeholder.
   */
  placeholder: PropTypes.bool,
  /**
   * Input disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Width 100%.
   */
  full: PropTypes.bool,
  /**
   * Handler to be called when the input is modified.
   */
  onChange: PropTypes.func,
  /**
   * Sizes of inputs.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Props of theme provided by `Themer`.
   */
  style: PropTypes.object,
  /**
   * Type of input.
   */
  type: PropTypes.string,
}

Input.defaultProps = {
  placeholder: '',
  disabled: false,
  full: false,
  onChange: () => 0,
  size: 'medium',
  style: {},
  type: 'text',
}

export default Input
