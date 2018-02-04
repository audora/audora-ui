import Color from 'color';

export default (base, amount) => Color(base).lighten(amount).hex();
