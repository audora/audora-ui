import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import { spacing } from '../../styles';

const baseStyle = {
  display: 'flex',
  flexDirection: 'row'
};

const buttonStyle = {
  ...spacing.MARGIN_LEFT_XS
};

const ButtonGroup = ({ children, type }) => (
  <div style={baseStyle}>
    {Children.map(children, (child, idx) => {
      if (child === null || child === false) {
        return child;
      }

      return (
        <div style={idx !== 0 ? buttonStyle : {}} key={idx}>
          {cloneElement(child, { type: child.props.type || type })}
        </div>
      );
    })}
  </div>
);

ButtonGroup.propTypes = {
  /**
   * Buttons to render.
   */
  children: PropTypes.node.isRequired,
  /**
   * Button types.
   */
  type: PropTypes.oneOf(['primary', 'default', 'subtle', 'link'])
};

ButtonGroup.defaultProps = {
  type: 'default'
};

export default ButtonGroup;
