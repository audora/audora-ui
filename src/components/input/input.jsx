import React from 'react'
import PropTypes from 'prop-types'
import InputElement from './element'
import { getPadding } from './selectors'

const Input = ({
  disabled,
  full,
  onChange,
  onFocus,
  onBlur,
  style,
  type,
  size,
  value,
  placeholder,
}) => (
  <InputElement
    {...getPadding(size)}
    placeholder={placeholder}
    value={value}
    type={type}
    disabled={disabled}
    full={full}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    style={style}
  />
)

Input.propTypes = {
  /**
   * Input value.
   */
  value: PropTypes.string,
  /**
   * Input placeholder.
   */
  placeholder: PropTypes.string,
  /**
   * Input disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Width 100%.
   */
  full: PropTypes.bool,
  /**
   * Input onFocus.
   */
  onFocus: PropTypes.func,
  /**
   * Input onBlur.
   */
  onBlur: PropTypes.func,
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
  value: '',
  placeholder: '',
  disabled: false,
  full: false,
  onChange: () => 0,
  onFocus: () => 0,
  onBlur: () => 0,
  size: 'medium',
  style: {},
  type: 'text',
}

export default Input
