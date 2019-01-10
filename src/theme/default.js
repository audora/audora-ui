const colors = {
  /**
   * http://www.0to255.com
   */
  default: ['#ebedf0', '#d8dce1', '#c4cad3'],
  primary: ['#217EE7', '#166dd0', '#135db1'],
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
  fontWeight: { normal: 400, bold: 700 },
  colors,
  fonts: {
    mono:
      '"SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Courier, monospace',
    sans:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Noto Sans", "Ubuntu", "Droid Sans", "Helvetica Neue", sans-serif',
  },
}
