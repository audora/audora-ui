import system from '@rebass/components'
import { themeGet } from 'styled-system'

const Input = system(
  {
    is: 'a',
    fontFamily: 'sans',
    m: 0,
    fontWeight: 'normal',
    fontSize: 2,
  },
  props => ({
    textDecoration: props.underline ? 'underline' : 'none',
    color: themeGet('colors.primary.normal')(props),

    '&:hover': {
      textDecoration: 'underline',
    },
  })
)

Input.displayName = 'Input'

export default Input
