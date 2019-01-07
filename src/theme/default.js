import chroma from 'chroma-js'

const colors = {
  /**
   * http://www.0to255.com
   */
  default: ['#ebedf0', '#d8dce1', '#c4cad3'],
  primary: ['#217EE7', '#166dd0'],
  danger: ['#b5202c', '#981b25'],
  transparent: 'transparent',
  grey: ['#576374'],
  black: '#000',
  white: '#fff',
}
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72]
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]
const avatarSizes = [18, 24, 32, 56, 84]

export default {
  space,
  fontSizes,
  avatarSizes,
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
      paddingTop: space[1],
      paddingBottom: space[1],
      paddingLeft: space[2],
      paddingRight: space[2],
      fontSize: fontSizes[1],
    },
    medium: {
      paddingTop: space[2],
      paddingBottom: space[2],
      paddingLeft: space[3],
      paddingRight: space[3],
      fontSize: fontSizes[2],
    },
    large: {
      paddingTop: space[3],
      paddingBottom: space[3],
      paddingLeft: space[4],
      paddingRight: space[4],
      fontSize: fontSizes[3],
    },
  },
  buttons: {
    default: {
      color: colors.grey[0],
      backgroundColor: colors.default[0],
      borderColor: colors.default[1],
      '&:hover': {
        borderColor: colors.default[2],
        backgroundColor: colors.default[1],
      },
      '&:focus': {
        zIndex: 1,
        borderColor: colors.default[2],
        boxShadow: `${chroma(colors.primary[0])
          .alpha(0.4)
          .css()} 0 0 0 ${space[1]}px`,
      },
      '&:active': {
        boxShadow: 'none',
      },
    },
    primary: {
      color: colors.white,
      backgroundColor: colors.primary[0],
      borderColor: colors.primary[1],
      '&:hover': {
        backgroundColor: colors.primary[1],
      },
      '&:focus': {
        zIndex: 1,
        boxShadow: `${chroma(colors.primary[0])
          .alpha(0.4)
          .css()} 0 0 0 ${space[1]}px`,
      },
      '&:active': {
        boxShadow: 'none',
      },
    },
    danger: {
      color: colors.danger[0],
      backgroundColor: colors.default[0],
      borderColor: colors.default[1],
      '&:hover': {
        color: colors.white,
        borderColor: colors.danger[1],
        backgroundColor: colors.danger[0],
      },
      '&:focus': {
        zIndex: 1,
        boxShadow: `${chroma(colors.danger[0])
          .alpha(0.4)
          .css()} 0 0 0 ${space[1]}px`,
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
        backgroundColor: colors.default[0],
      },
      '&:focus': {
        zIndex: 1,
        boxShadow: `${chroma(colors.primary[0])
          .alpha(0.4)
          .css()} 0 0 0 ${space[1]}px`,
      },
      '&:active': {
        boxShadow: 'none',
      },
    },
  },
}
