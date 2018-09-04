import { themeGet } from 'styled-system'

export default props => {
  if (props.size === 'tiny') {
    return {
      fontSize: `${themeGet('fontSize')(props)[0]}px`,
      height: `${themeGet('avatarSize')(props)[0]}px`,
      width: `${themeGet('avatarSize')(props)[0]}px`,
    }
  }
  if (props.size === 'small') {
    return {
      fontSize: `${themeGet('fontSize')(props)[1]}px`,
      height: `${themeGet('avatarSize')(props)[1]}px`,
      width: `${themeGet('avatarSize')(props)[1]}px`,
    }
  }
  if (props.size === 'large') {
    return {
      fontSize: `${themeGet('fontSize')(props)[3]}px`,
      height: `${themeGet('avatarSize')(props)[3]}px`,
      width: `${themeGet('avatarSize')(props)[3]}px`,
    }
  }
  if (props.size === 'huge') {
    return {
      fontSize: `${themeGet('fontSize')(props)[4]}px`,
      height: `${themeGet('avatarSize')(props)[4]}px`,
      width: `${themeGet('avatarSize')(props)[4]}px`,
    }
  }

  return {
    fontSize: `${themeGet('fontSize')(props)[2]}px`,
    height: `${themeGet('avatarSize')(props)[2]}px`,
    width: `${themeGet('avatarSize')(props)[2]}px`,
  }
}
