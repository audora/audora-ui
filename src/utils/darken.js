import Color from 'color'

export default (base, amount) =>
  Color(base)
    .darken(amount)
    .hex()
