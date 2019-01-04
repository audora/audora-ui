import styled from 'styled-components'
import { space, width, fontSize, variant } from 'styled-system'
// import { getColor } from './selectors'

const buttonStyle = variant({ key: 'buttons' })

const Button = styled.button`
  ${buttonStyle}
  ${space}
  ${width}
  ${fontSize}
`

// const Button = system(
//   {
//     is: 'button',
//     fontFamily: 'sans',
//     m: 0,
//     borderRadius: 3,
//     fontWeight: 'normal',
//     fontSize: 2,
//     border: 1,
//     justifyContent: 'center',
//   },
//   props => ({
//     outline: 'none',
//     userSelect: 'none',
//     cursor: 'pointer',
//     display: 'flex',
//     boxSizing: 'border-box',
//     alignSelf: 'center',
//     width: `${props.full ? '100%' : 'auto'}`,
//     textDecoration: 'none',

//     ...getColor(props),

//     '&:disabled': {
//       opacity: 0.5,
//       pointerEvents: 'none',
//       cursor: 'default',
//     },

//     '&:active': {
//       boxShadow: 'none',
//     },
//   })
// )

// Button.displayName = 'Button'

export default Button
