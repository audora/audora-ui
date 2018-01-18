import { capitalize } from '../utils';

const DIRECTIONS_X = ['LEFT', 'RIGHT'];
const DIRECTIONS_Y = ['TOP', 'BOTTOM'];

export const sizes = {
  MD: 4,
  LG: 10,
  XL: 20
};

const bordersRadius = {};

Object.keys(sizes).forEach(size => {
  const pxValue = sizes[size];

  bordersRadius[`BORDER_RADIUS_${size}`] = { borderRadius: pxValue };
  bordersRadius['BORDER_RADIUS_CIRCLE'] = { borderRadius: '100%' };

  DIRECTIONS_Y.forEach(dirY => {
    DIRECTIONS_X.forEach(dirX => {
      bordersRadius[`BORDER_RADIUS_${dirY}_${dirX}_${size}`] = {
        [`borderRadius${capitalize(dirY)}${capitalize(dirX)}`]: pxValue
      };
    });
  });
});

export default { ...bordersRadius };
