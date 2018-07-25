import chroma from 'chroma-js'

const colorSystem = {
  danger: '#b5202c',
  primary: '#217EE7',
  default: '#ebedf0',
}

const colorSystemdark = {
  dark: {
    primary: chroma(colorSystem.primary)
      .darken()
      .hex(),
    danger: chroma(colorSystem.danger)
      .darken()
      .hex(),
    default: '#ddd',
  },
  darken: {
    default: '#ccc',
  },
}

export default {
  space: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 96],
  avatarSizes: [18, 24, 32, 56, 84],
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  colors: {
    ...colorSystem,
    ...colorSystemdark,
    transparent: 'transparent',
    grey: '#666',
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
