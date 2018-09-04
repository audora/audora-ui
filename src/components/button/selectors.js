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
        backgroundColor: themeGet('colors.default.normal')(props),
      },
      '&:focus': {
        zIndex: 1,
        boxShadow: `${chroma(themeGet('colors.primary.normal')(props))
          .alpha(0.4)
          .css()} 0 0 0 3px`,
      },
    }
  }

  if (props.variant === 'primary') {
    return {
      color: themeGet('colors.white')(props),
      backgroundColor: themeGet('colors.primary.normal')(props),
      borderColor: themeGet('colors.primary.dark')(props),
      '&:hover': {
        backgroundColor: themeGet('colors.primary.dark')(props),
      },
      '&:focus': {
        zIndex: 1,
        boxShadow: `${chroma(themeGet('colors.primary.normal')(props))
          .alpha(0.4)
          .css()} 0 0 0 3px`,
      },
    }
  }

  if (props.variant === 'danger') {
    return {
      color: themeGet('colors.danger.normal')(props),
      backgroundColor: themeGet('colors.default.normal')(props),
      borderColor: themeGet('colors.default.dark')(props),
      '&:hover': {
        color: themeGet('colors.white')(props),
        borderColor: themeGet('colors.danger.dark')(props),
        backgroundColor: themeGet('colors.danger.normal')(props),
      },
      '&:focus': {
        zIndex: 1,
        boxShadow: `${chroma(themeGet('colors.danger.normal')(props))
          .alpha(0.4)
          .css()} 0 0 0 3px`,
      },
    }
  }

  return {
    color: themeGet('colors.grey')(props),
    backgroundColor: themeGet('colors.default.normal')(props),
    borderColor: themeGet('colors.default.dark')(props),
    '&:hover': {
      borderColor: themeGet('colors.default.darken')(props),
      backgroundColor: themeGet('colors.default.dark')(props),
    },
    '&:focus': {
      zIndex: 1,
      borderColor: themeGet('colors.default.darken')(props),
      boxShadow: `${chroma(themeGet('colors.primary.normal')(props))
        .alpha(0.4)
        .css()} 0 0 0 3px`,
    },
  }
}
