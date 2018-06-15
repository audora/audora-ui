import React from 'react'
import PropTypes from 'prop-types'
import BoxElement from './element'
import { getPadding } from './selectors'

const Box = props => (
  <BoxElement
    {...getPadding(props)}
    is={props.type}
    onClick={props.onClick}
    appearance={props.appearance}
    full={props.full}
    disabled={props.disabled}
  >
    {props.children || props.content}
  </BoxElement>
)

Box.propTypes = {
  appearance: PropTypes.oneOf(['default', 'primary', 'subtle']),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  disabled: PropTypes.bool,
  full: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  type: PropTypes.string,
}

Box.defaultProps = {
  appearance: 'default',
  children: null,
  content: null,
  disabled: false,
  full: false,
  onClick: () => 0,
  size: 'medium',
  type: 'button',
}

export default Box
