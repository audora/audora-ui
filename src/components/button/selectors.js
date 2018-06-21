import { themeGet } from 'styled-system'
import chroma from 'chroma-js'

export const getBg = props => {
  if (props.appearance === 'primary') {
    return themeGet('colors.primary')(props)
  }
  if (props.appearance === 'subtle') {
    return themeGet('colors.transparent')(props)
  }

  return themeGet('colors.default')(props)
}

export const getBorderColor = props => {
  if (props.appearance === 'primary') {
    return themeGet('colors.darken.primary')(props)
  }
  if (props.appearance === 'subtle') {
    return themeGet('colors.transparent')(props)
  }

  return themeGet('colors.darken.default')(props)
}

export const getColor = props => {
  if (props.appearance === 'primary') {
    return themeGet('colors.white')(props)
  }
  if (props.appearance === 'subtle') {
    return themeGet('colors.grey')(props)
  }

  return themeGet('colors.grey')(props)
}

export const getHoverBg = props => {
  if (props.appearance === 'primary') {
    return chroma(themeGet('colors.primary')(props))
      .darken()
      .hex()
  }
  if (props.appearance === 'subtle') {
    return themeGet('colors.default')(props)
  }

  return themeGet('colors.darken.default')(props)
}

export const getPadding = props => {
  if (props.size === 'large') {
    return {
      py: 3,
      px: 4,
      fontSize: 3,
    }
  }
  if (props.size === 'small') {
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
