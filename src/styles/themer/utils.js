import colors from '../colors'
import PropTypes from 'prop-types'

export const themeTemplate = {
  colors: {
    default: true,
    defaultHover: true,
    defaultActive: true,
    primary: true,
    primaryHover: true,
    primaryActive: true,
    success: true,
    danger: true,
    warning: true,
  }
}

export const defaultTheme = {
  colors: {
    default: colors.GREY_LIGHT,
    defaultHover: colors.GREY,
    defaultActive: colors.GREY_DARK,
    primary: colors.AUDORA_LIGHT,
    primaryHover: colors.AUDORA,
    primaryActive: colors.AUDORA_DARK,
    success: colors.SUCCESS,
    danger: colors.DANGER,
    warning: colors.WARNING,
  }
}

export function cleanConfig(themeConfig) {
  const cleanConfig = {}

  Object.keys(themeConfig).forEach(themeSection => {
    if (!themeTemplate[themeSection]) {
      console.warn(`Snacks theme error: "${themeSection}" not a valid config section. These values will not be set. Please use Themer template: `, themeTemplate)
    } else {
      Object.keys(themeConfig[themeSection]).forEach(sectionKey => {
        const templateSectionKey = themeTemplate[themeSection][sectionKey]
        const newSectionKey = themeConfig[themeSection][sectionKey]

        if (!templateSectionKey) {
          console.warn(`Snacks theme error: "${sectionKey}" not a valid config key. This value will not be set. Please use Themer template: `, themeTemplate)
        } else {
          if (!cleanConfig[themeSection]) { cleanConfig[themeSection] = {} }
          cleanConfig[themeSection][sectionKey] = newSectionKey
        }
      })
    }
  })

  return cleanConfig
}

export function validConfigValue(section, sectionKey) {
  if (!themeTemplate[section]) {
    console.warn(`Snacks theme error: "${section}" not a valid config section. These values will not be set. Please use Themer template: `, themeTemplate)
    return false
  }

  if (!themeTemplate[section][sectionKey]) {
    console.warn(`Snacks theme error: "${sectionKey}" not a valid config key. This value will not be set. Please use Themer template: `, themeTemplate)
    return false
  }

  return true
}

export const themePropTypes = PropTypes.shape({
  colors: PropTypes.shape({
    primary: PropTypes.string,
    success: PropTypes.string,
    danger: PropTypes.string,
    warning: PropTypes.string,
  })
})

export default {
  cleanConfig,
  themePropTypes,
  themeTemplate,
  validConfigValue
}