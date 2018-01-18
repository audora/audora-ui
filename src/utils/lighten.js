import tinycolor from 'tinycolor2'
import _ from 'underscore'

export default _.memoize((baseColor, amount) => {
  return tinycolor(baseColor).lighten(amount).toHexString()
})