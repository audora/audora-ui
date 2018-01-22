import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

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

const spinStyle = {
  animationName: rotationKeyframes,
  animationDuration: '3s',
  animationTimingFunction: 'linear',
  animationIterationCount: 'infinite'
};

const Icon = ({ color, name, size, style, spin, onClick }) => (
  <span
    onClick={onClick}
    dangerouslySetInnerHTML={{
      __html: require(`../../icons/feather/${name}.svg`)
    }}
    style={[baseStyles, sizeStyles[size], { color }, spin && spinStyle, style]}
  />
);

Icon.propTypes = {
  /**
   * Color of icon.
   */
  color: PropTypes.string,
  /**
   * Handler to be called when the button is clicked.
   */
  onClick: PropTypes.func,
  /**
   * Name of icon used on `fathericons`.
   */
  name: PropTypes.string.isRequired,
  /**
   * Icon size.
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  /**
   * Rotates the icon with animation.
   */
  spin: PropTypes.bool,
  /**
   * Props of theme provided by `Themer`.
   */
  style: PropTypes.object
};

Icon.defaultProps = {
  color: '',
  size: 'medium',
  spin: false,
  style: {},
  onClick: () => 0
};

export default Radium(Icon);
