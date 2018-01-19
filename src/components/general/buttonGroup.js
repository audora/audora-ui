import React from 'react';
import PropTypes from 'prop-types';
import { spacing } from '../../styles';

const baseStyle = {
  display: 'flex',
  flexDirection: 'row'
};

const buttonStyle = {
  ...spacing.MARGIN_LEFT_XS
};

const ButtonGroup = ({ children }) => (
  <div style={baseStyle}>
    {children.map((item, key) => (
      <div style={key !== 0 ? buttonStyle : {}} key={key}>
        {item}
      </div>
    ))}
  </div>
);

ButtonGroup.propTypes = {
  /**
   * Botões para renderizar.
   */
  children: PropTypes.node.isRequired
};

export default ButtonGroup;
