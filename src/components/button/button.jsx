import styled from 'styled-components'
import PropTypes from 'prop-types'
import { fontFamily, buttonStyle, variant } from 'styled-system'
import Flex from '../flex'
import { themed } from '../../utils'

const buttonSize = variant({
  key: 'buttonSizes',
  prop: 'size',
})

const Button = styled(Flex)(
  props => ({
    appearance: 'none',
    outline: 'none',
    justifyContent: 'center',
    alignSelf: 'center',
    textDecoration: 'none',
    fontWeight: 'normal',
    cursor: 'pointer',
    border: 0,
    borderRadius: 4,
    width: props.full ? '100%' : 'auto',
    '&:disabled': {
      opacity: 0.5,
      pointerEvents: 'none',
      cursor: 'default',
    },
  }),
  fontFamily,
  buttonStyle,
  buttonSize,
  themed('Button')
)

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  ...fontFamily.propTypes,
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
}

export default Button
