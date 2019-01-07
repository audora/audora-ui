import styled from 'styled-components'
import PropTypes from 'prop-types'
import { buttonStyle, variant } from 'styled-system'
import chroma from 'chroma-js'
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
    alignSelf: 'center',
    textDecoration: 'none',
    fontWeight: 'normal',
    cursor: 'pointer',
    fontFamily: 'inherit',
    paddingTop: props.theme.space[2],
    paddingBottom: props.theme.space[2],
    paddingLeft: props.theme.space[3],
    paddingRight: props.theme.space[3],
    fontSize: props.theme.fontSizes[2],
    border: 0,
    borderRadius: 4,
    width: props.full ? '100%' : 'auto',
    '&:disabled': {
      opacity: 0.5,
      pointerEvents: 'none',
      cursor: 'default',
    },
    color: props.theme.colors.grey[0],
    backgroundColor: props.theme.colors.default[0],
    borderColor: props.theme.colors.default[1],
    '&:hover': {
      borderColor: props.theme.colors.default[2],
      backgroundColor: props.theme.colors.default[1],
    },
    '&:focus': {
      zIndex: 1,
      borderColor: props.theme.colors.default[2],
      boxShadow: `${chroma(props.theme.colors.primary[0])
        .alpha(0.4)
        .css()} 0 0 0 ${props.theme.space[1]}px`,
    },
    '&:active': {
      boxShadow: 'none',
    },
  }),
  buttonStyle,
  buttonSize,
  themed('Button')
)

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  ...buttonStyle.propTypes,
}

Button.defaultProps = {
  as: 'button',
  variant: 'default',
  justifyContent: 'center',
  m: 0,
}

export default Button
