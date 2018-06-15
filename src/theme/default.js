import chroma from 'chroma-js'

const colorSystem = {
  primary: '#217EE7',
  default: '#ebedf0',
}

const colorSystemDarken = {
  darken: {
    primary: chroma(colorSystem.primary)
      .darken()
      .hex(),
    default: '#ddd',
  },
}

export default {
  space: [0, 4, 8, 16, 32, 64, 128],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 96],
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  colors: {
    ...colorSystem,
    ...colorSystemDarken,
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
