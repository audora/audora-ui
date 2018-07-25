import system from 'system-components'
import { themeGet } from 'styled-system'
import getSize from './selectors'

const Avatar = system(
  {
    fontFamily: 'sans',
    m: 0,
    fontWeight: 'normal',
    border: 1,
  },
  props => ({
    userSelect: 'none',
    cursor: 'default',
    display: 'flex',
    boxSizing: 'border-box',
    borderRadius: props.square ? '20%' : '50%',
    alignSelf: 'center',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    color: themeGet('colors.grey')(props),
    backgroundColor: themeGet('colors.default')(props),
    borderColor: themeGet('colors.dark.default')(props),
    ...getSize(props),
  })
)

Avatar.displayName = 'Avatar'

export default Avatar
