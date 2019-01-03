import { themeGet } from 'styled-system'
import chroma from 'chroma-js'

export const getPadding = size => {
  if (size === 'large') {
    return {
      py: 3,
      px: 4,
      fontSize: 3,
    }
  }
  if (size === 'small') {
    return {
      py: 1,
      px: 2,
      fontSize: 1,
    }
  }

  return {
    py: 2,
    px: 3,
    fontSize: 2,
  }
}

export const getColor = props => ({
  color: themeGet('colors.black')(props),
  backgroundColor: themeGet('colors.white')(props),
  borderColor: themeGet('colors.default.dark')(props),
  '&:hover': {
    borderColor: themeGet('colors.default.darken')(props),
  },
  '&:focus': {
    zIndex: 1,
    borderColor: themeGet('colors.primary.dark')(props),
    boxShadow: `${chroma(themeGet('colors.primary.normal')(props))
      .alpha(0.4)
      .css()} 0 0 0 3px`,
  },
})
