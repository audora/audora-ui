import React from 'react'
import PropTypes from 'prop-types'
import InputElement from './element'
import { getPadding } from './selectors'

const Input = ({ disabled, full, required, size, ...rest }) => {
  const inputProps = {
    required,
    disabled,
    full,
    ...getPadding(size),
    ...rest,
  }

  return <InputElement {...inputProps} />
}

Input.propTypes = {
  /**
   * Input placeholder.
   */
  placeholder: PropTypes.string,
  /**
   * Input disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Input required.
   */
  required: PropTypes.bool,
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
  required: false,
  onChange: () => 0,
  size: 'medium',
  style: {},
  type: 'text',
}

export default Input
