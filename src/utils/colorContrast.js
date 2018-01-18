import tinycolor from 'tinycolor2';

export default color => {
  if (tinycolor.isReadable(color, '#fff', { level: 'AA', size: 'small' })) {
    return '#fff';
  }

  return '#333';
};
