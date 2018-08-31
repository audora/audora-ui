import system from 'system-components'
import { getColor } from './selectors'

const Button = system(
  {
    is: 'button',
    fontFamily: 'sans',
    m: 0,
    borderRadius: 3,
    fontWeight: 'normal',
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

    ...getColor(props),

    '&:disabled': {
      opacity: 0.5,
      pointerEvents: 'none',
      cursor: 'default',
    },

    '&:active': {
      boxShadow: 'none',
    },
  })
)

Button.displayName = 'Button'

export default Button
