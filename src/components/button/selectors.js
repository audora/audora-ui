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

export const getColor = props => {
  if (props.variant === 'subtle') {
    return {
      color: themeGet('colors.grey')(props),
      backgroundColor: themeGet('colors.transparent')(props),
      borderColor: themeGet('colors.transparent')(props),
      '&:hover': {
        backgroundColor: themeGet('colors.default')(props),
      },
      '&:focus': {
        zIndex: 1,
        boxShadow: `${chroma(themeGet('colors.primary')(props))
          .alpha(0.4)
          .css()} 0 0 0 3px`,
      },
    }
  }

  if (props.variant === 'primary') {
    return {
      color: themeGet('colors.white')(props),
      backgroundColor: themeGet('colors.primary')(props),
      borderColor: themeGet('colors.dark.primary')(props),
      '&:hover': {
        backgroundColor: themeGet('colors.dark.primary')(props),
      },
      '&:focus': {
        zIndex: 1,
        boxShadow: `${chroma(themeGet('colors.primary')(props))
          .alpha(0.4)
          .css()} 0 0 0 3px`,
      },
    }
  }

  if (props.variant === 'danger') {
    return {
      color: themeGet('colors.danger')(props),
      backgroundColor: themeGet('colors.default')(props),
      borderColor: themeGet('colors.dark.default')(props),
      '&:hover': {
        color: themeGet('colors.white')(props),
        borderColor: themeGet('colors.dark.danger')(props),
        backgroundColor: themeGet('colors.danger')(props),
      },
      '&:focus': {
        zIndex: 1,
        boxShadow: `${chroma(themeGet('colors.danger')(props))
          .alpha(0.4)
          .css()} 0 0 0 3px`,
      },
    }
  }

  return {
    color: themeGet('colors.grey')(props),
    backgroundColor: themeGet('colors.default')(props),
    borderColor: themeGet('colors.dark.default')(props),
    '&:hover': {
      borderColor: themeGet('colors.darken.default')(props),
      backgroundColor: themeGet('colors.dark.default')(props),
    },
    '&:focus': {
      zIndex: 1,
      borderColor: themeGet('colors.darken.default')(props),
      boxShadow: `${chroma(themeGet('colors.primary')(props))
        .alpha(0.4)
        .css()} 0 0 0 3px`,
    },
  }
}
