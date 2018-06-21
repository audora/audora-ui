import system from 'system-components'
import chroma from 'chroma-js'
import { themeGet } from 'styled-system'
import { getBg, getBorderColor, getColor, getHoverBg } from './selectors'

const Box = system(
  {
    is: 'button',
    fontFamily: 'sans',
    m: 0,
    borderRadius: 3,
    fontSize: 2,
    border: 1,
  },
  props => ({
    outline: 'none',
    userSelect: 'none',
    cursor: 'pointer',
    display: 'flex',
    boxSizing: 'border-box',
    alignSelf: 'center',
    justifyContent: 'center',
    width: `${props.full ? '100%' : 'auto'}`,
    backgroundColor: `${getBg(props)}`,
    color: `${getColor(props)}`,
    borderColor: `${getBorderColor(props)}`,

    '&:disabled': {
      opacity: 0.5,
      pointerEvents: 'none',
      cursor: 'default',
    },

    '&:hover': {
      backgroundColor: `${getHoverBg(props)}`,
    },

    '&:focus': {
      boxShadow: `${chroma(themeGet('colors.primary')(props))
        .alpha(0.4)
        .css()} 0 0 0 3px`,
    },
  })
)

Box.displayName = 'Box'

export default Box
