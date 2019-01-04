import styled from 'styled-components'
import PropTypes from 'prop-types'
import {
  fontFamily,
  borders,
  borderRadius,
  buttonStyle,
  variant,
} from 'styled-system'
import Box from '../box'
import { themed } from '../../utils'

const buttonSize = variant({
  key: 'buttonSizes',
  prop: 'size',
})

const Button = styled(Box)(
  props => ({
    appearance: 'none',
    outline: 'none',
    display: 'inline-block',
    textAlign: 'center',
    lineHeight: 'inherit',
    textDecoration: 'none',
    fontWeight: 'normal',
    cursor: 'pointer',
    width: props.full ? '100%' : 'auto',
    '&:disabled': {
      opacity: 0.5,
      pointerEvents: 'none',
      cursor: 'default',
    },
  }),
  fontFamily,
  borders,
  borderRadius,
  buttonStyle,
  buttonSize,
  themed('Button')
)

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  ...borders.propTypes,
  ...fontFamily.propTypes,
  ...borderRadius.propTypes,
  ...buttonStyle.propTypes,
}

Button.defaultProps = {
  as: 'button',
  fontFamily: 'sans',
  variant: 'default',
  fontSize: 'inherit',
  m: 0,
  px: 3,
  py: 2,
  border: 0,
  borderRadius: 4,
}

export default Button
