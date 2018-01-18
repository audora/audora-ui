import { capitalize } from '../utils';

const DIRECTIONS = ['TOP', 'LEFT', 'BOTTOM', 'RIGHT'];

export const sizes = {
  XS: 8,
  SM: 16,
  MD: 24,
  LG: 32,
  XL: 48,
  HUGE: 64
};

const spacings = {};

Object.keys(sizes).forEach(size => {
  const pxValue = sizes[size];

  spacings[`MARGIN_${size}`] = { margin: pxValue };
  spacings[`PADDING_${size}`] = { padding: pxValue };

  spacings[`PADDING_X_${size}`] = {
    paddingLeft: pxValue,
    paddingRight: pxValue
  };
  spacings[`PADDING_Y_${size}`] = {
    paddingTop: pxValue,
    paddingBottom: pxValue
  };
  spacings[`MARGIN_X_${size}`] = { marginLeft: pxValue, marginRight: pxValue };
  spacings[`MARGIN_Y_${size}`] = { marginTop: pxValue, marginBottom: pxValue };

  DIRECTIONS.forEach(direction => {
    spacings[`MARGIN_${direction}_${size}`] = {
      [`margin${capitalize(direction)}`]: pxValue
    };
    spacings[`PADDING_${direction}_${size}`] = {
      [`padding${capitalize(direction)}`]: pxValue
    };
    spacings[`${direction}_${size}`] = {
      [`${direction.toLowerCase()}`]: pxValue
    };
  });
});

export default { ...spacings };
