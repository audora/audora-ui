// http://www.0to255.com

const colorSystem = {
  danger: '#b5202c',
  default: '#ebedf0',
  primary: '#217EE7',
}

const colorSystemDark = {
  dark: {
    danger: '#981b25', // -2 of b5202c
    default: '#d8dce1', // -2 of #ebedf0
    primary: '#166dd0', // -2 of #217EE7
  },
  darken: {
    danger: '#7b161e', // -4 of b5202c
    default: '#c4cad3', // -4 of #ebedf0
    primary: '#135db1', // -4 of #217EE7
  },
}

export default {
  space: [0, 4, 8, 16, 32, 64, 128],
  fontSize: [12, 14, 16, 20, 24, 32, 48, 64, 72, 96],
  avatarSize: [18, 24, 32, 56, 84],
  fontWeight: {
    normal: 400,
    bold: 700,
  },
  colors: {
    ...colorSystem,
    ...colorSystemDark,
    transparent: 'transparent',
    grey: '#667388', // -14 of #ebedf0
    black: '#111',
    white: '#fff',
  },
  fonts: {
    mono:
      '"SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Courier, monospace',
    sans:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',
  },
}
