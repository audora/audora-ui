import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import withTheme from '../../styles/themer/withTheme';
import { themePropTypes } from '../../styles/themer/utils';
import { borderRadius } from '../../styles';
import { ligthen } from '../../utils';

const baseStyle = {
  ...borderRadius.BORDER_RADIUS_LG,
  fontSize: 13,
  paddingLeft: 6,
  paddingRight: 6,
  paddingTop: 2,
  display: 'inline-flex'
};

const getTypeStyle = ({ colors }) => ({
  default: {
    background: colors.default,
    color: '#555'
  },
  inverted: {
    background: '#fff',
    border: '1px solid #ddd',
    color: '#555'
  },
  primary: {
    background: colors.primary,
    color: '#fff'
  },
  added: {
    background: colors.success,
    color: '#fff'
  },
  removed: {
    background: colors.danger,
    color: '#fff'
  }
});

const getValue = (value, max) => {
  if (value < 0) {
    return '0';
  }
  if (max > 0 && value > max) {
    return `${max}+`;
  }
  return String(value);
};

const Badge = ({ value, max, type, auiTheme }) => {
  const typeStyle = getTypeStyle(auiTheme);

  return <div style={[baseStyle, typeStyle[type]]}>{getValue(value, max)}</div>;
};

Badge.propTypes = {
  /**
   * O valor exibido dentro do Badge.
   */
  value: PropTypes.number,
  /**
   * O valor máximo a ser exibido. Se o valor for 100 e o máximo for 50, será exibido **50+**.
   */
  max: PropTypes.number,
  /**
   * tipo
   */
  type: PropTypes.oneOf(['default', 'inverted', 'primary', 'added', 'removed']),
  /**
   * Atributos do tema Aui fornecidos por `Themer`
   */
  auiTheme: themePropTypes
};

Badge.defaultProps = {
  max: 99,
  type: 'default',
  value: 0
};

export default withTheme(Radium(Badge));
