import styled from 'styled-components'
import PropTypes from 'prop-types'
import Flex from './flex'
import { themed, hexToRgbA } from '../utils'

const buttonSize = props => {
  const { space, fontSizes } = props.theme
  let paddingTop
  let paddingBottom
  let paddingLeft
  let paddingRight
  let fontSize

  switch (props.size) {
    case 'small':
      paddingTop = space[1]
      paddingBottom = space[1]
      paddingLeft = space[2]
      paddingRight = space[2]
      fontSize = fontSizes[1]
      break

    case 'large':
      paddingTop = space[3]
      paddingBottom = space[3]
      paddingLeft = space[4]
      paddingRight = space[4]
      fontSize = fontSizes[3]
      break

    default:
      paddingTop = space[2]
      paddingBottom = space[2]
      paddingLeft = space[3]
      paddingRight = space[3]
      fontSize = fontSizes[2]
      break
  }

  return {
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    fontSize,
  }
}

const buttonVariant = props => {
  const { colors } = props.theme
  let color
  let backgroundColor
  let borderColor
  let hover
  let focus
  let active

  switch (props.variant) {
    case 'subtle':
      color = colors.grey[0]
      backgroundColor = colors.transparent
      borderColor = colors.default[1]
      hover = { backgroundColor: colors.default[0] }
      focus = {
        zIndex: 1,
        boxShadow: `${hexToRgbA(colors.primary[0], 0.4)} 0 0 0 3px`,
      }
      active = { boxShadow: 'none', backgroundColor: colors.default[1] }
      break
    case 'primary':
      color = colors.white
      backgroundColor = colors.primary[0]
      borderColor = colors.primary[1]
      hover = { backgroundColor: colors.primary[1] }
      focus = {
        zIndex: 1,
        boxShadow: `${hexToRgbA(colors.primary[0], 0.4)} 0 0 0 3px`,
      }
      active = { boxShadow: 'none', backgroundColor: colors.primary[2] }
      break
    case 'danger':
      color = colors.danger[0]
      backgroundColor = colors.default[0]
      borderColor = colors.default[1]
      hover = {
        color: colors.white,
        borderColor: colors.danger[1],
        backgroundColor: colors.danger[0],
      }
      focus = {
        zIndex: 1,
        boxShadow: `${hexToRgbA(colors.danger[0], 0.4)} 0 0 0 3px`,
      }
      active = { boxShadow: 'none', backgroundColor: colors.danger[1] }
      break

    default:
      color = colors.grey[0]
      backgroundColor = colors.default[0]
      borderColor = colors.default[0]
      hover = {
        borderColor: colors.default[2],
        backgroundColor: colors.default[1],
      }
      focus = {
        zIndex: 1,
        borderColor: colors.default[2],
        boxShadow: `${hexToRgbA(colors.primary[0], 0.4)} 0 0 0 3px`,
      }
      active = { boxShadow: 'none', backgroundColor: colors.default[2] }
      break
  }

  return {
    color,
    backgroundColor,
    borderColor,
    '&:hover': hover,
    '&:focus': focus,
    '&:active': active,
  }
}

const Button = styled(Flex)(
  props => ({
    outline: 'none',
    alignSelf: 'center',
    textDecoration: 'none',
    fontWeight: 'normal',
    cursor: 'pointer',
    fontFamily: props.theme.fonts.sans,
    border: 0,
    borderRadius: 4,
    width: props.full ? '100%' : 'auto',
    '&:disabled': {
      opacity: 0.5,
      pointerEvents: 'none',
      cursor: 'default',
    },
  }),
  buttonVariant,
  buttonSize,
  themed('Button')
)

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['default', 'primary', 'danger', 'subtle']),
}

Button.defaultProps = {
  as: 'button',
  justifyContent: 'center',
  m: 0,
}

export default Button
