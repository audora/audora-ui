import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import withTheme from '../../styles/themer/withTheme';
import { themePropTypes } from '../../styles/themer/utils';

const baseStyles = {
  color: '#333',
  display: 'inline-block',
  lineHeight: 1
};

const sizeStyles = {
  tiny: {
    height: 14,
    width: 14
  },
  small: {
    height: 18,
    width: 18
  },
  medium: {
    height: 24,
    width: 24
  },
  large: {
    height: 32,
    width: 32
  }
};

const reversedStyle = {
  color: '#fff'
};

const rotationKeyframes = Radium.keyframes({
  from: { transform: 'rotate(0deg)' },
  to: { transform: 'rotate(359deg)' }
});

const loaderStyle = {
  animationName: rotationKeyframes,
  animationDuration: '3s',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite'
};

const Icon = ({ color, name, onClick, size, style }) => (
  <span
    onClick={onClick}
    dangerouslySetInnerHTML={{
      __html: require(`../../icons/feather/${name}.svg`)
    }}
    style={[
      baseStyles,
      sizeStyles[size],
      { color },
      name === 'loader' && loaderStyle,
      style
    ]}
  />
);

Icon.propTypes = {
  style: PropTypes.object,
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  onClick: PropTypes.func
};

Icon.defaultProps = {
  style: {},
  color: '',
  onClick: () => 0,
  size: 'medium'
};

export default withTheme(Radium(Icon));
