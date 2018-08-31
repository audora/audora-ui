import { themeGet } from 'styled-system'

export default props => {
  if (props.size === 'tiny') {
    return {
      fontSize: `${themeGet('fontSizes')(props)[0]}px`,
      height: `${themeGet('avatarSizes')(props)[0]}px`,
      width: `${themeGet('avatarSizes')(props)[0]}px`,
    }
  }
  if (props.size === 'small') {
    return {
      fontSize: `${themeGet('fontSizes')(props)[1]}px`,
      height: `${themeGet('avatarSizes')(props)[1]}px`,
      width: `${themeGet('avatarSizes')(props)[1]}px`,
    }
  }
  if (props.size === 'large') {
    return {
      fontSize: `${themeGet('fontSizes')(props)[3]}px`,
      height: `${themeGet('avatarSizes')(props)[3]}px`,
      width: `${themeGet('avatarSizes')(props)[3]}px`,
    }
  }
  if (props.size === 'huge') {
    return {
      fontSize: `${themeGet('fontSizes')(props)[4]}px`,
      height: `${themeGet('avatarSizes')(props)[4]}px`,
      width: `${themeGet('avatarSizes')(props)[4]}px`,
    }
  }

  return {
    fontSize: `${themeGet('fontSizes')(props)[2]}px`,
    height: `${themeGet('avatarSizes')(props)[2]}px`,
    width: `${themeGet('avatarSizes')(props)[2]}px`,
  }
}
