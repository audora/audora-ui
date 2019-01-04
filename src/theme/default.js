import chroma from 'chroma-js'
import colors from './default.colors'

export default {
  space: [0, 4, 8, 16, 32, 64, 128],
  avatarSize: [18, 24, 32, 56, 84],
  fontWeight: {
    normal: 400,
    bold: 700,
  },
  colors,
  fonts: {
    mono:
      '"SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Courier, monospace',
    sans:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',
  },
  buttonSizes: {
    small: {
      py: 1,
      px: 2,
      fontSize: 2,
    },
  },
  buttons: {
    default: {
      color: colors.grey[0],
      backgroundColor: colors.default.normal,
      borderColor: colors.default.dark,
      '&:hover': {
        borderColor: colors.default.darken,
        backgroundColor: colors.default.dark,
      },
      '&:focus': {
        zIndex: 1,
        borderColor: colors.default.darken,
        boxShadow: `${chroma(colors.primary.normal)
          .alpha(0.4)
          .css()} 0 0 0 3px`,
      },
      '&:active': {
        boxShadow: 'none',
      },
    },
    primary: {
      color: colors.white,
      backgroundColor: colors.primary.normal,
      borderColor: colors.primary.dark,
      '&:hover': {
        backgroundColor: colors.primary.dark,
      },
      '&:focus': {
        zIndex: 1,
        boxShadow: `${chroma(colors.primary.normal)
          .alpha(0.4)
          .css()} 0 0 0 3px`,
      },
      '&:active': {
        boxShadow: 'none',
      },
    },
    danger: {
      color: colors.danger.normal,
      backgroundColor: colors.default.normal,
      borderColor: colors.default.dark,
      '&:hover': {
        color: colors.white,
        borderColor: colors.danger.dark,
        backgroundColor: colors.danger.normal,
      },
      '&:focus': {
        zIndex: 1,
        boxShadow: `${chroma(colors.danger.normal)
          .alpha(0.4)
          .css()} 0 0 0 3px`,
      },
      '&:active': {
        boxShadow: 'none',
      },
    },
    subtle: {
      color: colors.grey[0],
      backgroundColor: colors.transparent,
      borderColor: colors.transparent,
      '&:hover': {
        backgroundColor: colors.default.normal,
      },
      '&:focus': {
        zIndex: 1,
        boxShadow: `${chroma(colors.primary.normal)
          .alpha(0.4)
          .css()} 0 0 0 3px`,
      },
      '&:active': {
        boxShadow: 'none',
      },
    },
  },
}
