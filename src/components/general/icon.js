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

const Icon = ({ color, name, size, style, spin }) => (
  <span
    dangerouslySetInnerHTML={{
      __html: require(`../../icons/feather/${name}.svg`)
    }}
    style={[baseStyles, sizeStyles[size], { color }, spin && spinStyle, style]}
  />
);

Icon.propTypes = {
  /**
   * Cor do Icon.
   */
  color: PropTypes.string,
  /**
   * Nome do icon usado no `feathericons`.
   */
  name: PropTypes.string.isRequired,
  /**
   * Tamanho do Icon.
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  /**
   * Rotaciona o icon com animação.
   */
  spin: PropTypes.bool,
  /**
   * Substituição opticional de estilo.
   */
  style: PropTypes.object
};

Icon.defaultProps = {
  color: '',
  size: 'medium',
  spin: false,
  style: {}
};

export default Radium(Icon);
