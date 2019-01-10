export const themed = key => props => props.theme[key]
export const isObject = item =>
  item && typeof item === 'object' && !Array.isArray(item)
export const mergeDeep = (target, ...sources) => {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    /* eslint-disable */
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} })
        mergeDeep(target[key], source[key])
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    }
    /* eslint-enable */
  }

  return mergeDeep(target, ...sources)
}
export const hexToRgbA = (hex, apha) => {
  let c

  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('')
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]]
    }
    c = `0x${c.join('')}`
    // eslint-disable-next-line
    return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(
      ','
    )}, ${apha})`
  }
  throw new Error('Bad Hex')
}
