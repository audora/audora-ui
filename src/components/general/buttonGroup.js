import React, { Children, cloneElement } from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash/fp/merge';
import styled, { css } from 'styled-components';

const ButtonGroupComponent = styled.div`
  display: flex;
  flex-direction: row;
`;

const ButtonGroup = ({ children, type, size, compressed }) => {
  const buttonStyle = (style, idx) => {
    if (compressed) {
      if (idx === children.length - 1) {
        return merge(
          {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
          },
          style
        );
      }
      if (idx === 0) {
        return merge(
          {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
          },
          style
        );
      }

      return merge(
        {
          borderRadius: 0
        },
        style
      );
    }
    if (idx !== 0) {
      return merge(
        {
          marginLeft: 10
        },
        style
      );
    }

    return style;
  };

  return (
    <ButtonGroupComponent>
      {Children.map(children, (child, idx) => {
        if (child === null || child === false) {
          return child;
        }

        return cloneElement(child, {
          key: idx,
          style: buttonStyle(child.props.style, idx),
          type: type || child.props.type,
          size: size || child.props.size
        });
      })}
    </ButtonGroupComponent>
  );
};

ButtonGroup.propTypes = {
  /**
   * Buttons to render.
   */
  children: PropTypes.node.isRequired,
  /**
   * Mo margin between buttons.
   */
  compressed: PropTypes.bool,
  /**
   * Buton sizes.
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  /**
   * Button types.
   */
  type: PropTypes.oneOf(['primary', 'default', 'subtle', 'link'])
};

ButtonGroup.defaultProps = {
  compressed: false,
  size: 'medium',
  type: 'default'
};

export default ButtonGroup;
