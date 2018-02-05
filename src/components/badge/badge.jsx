import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import configTheme from '../../theme/config';

const getValue = (value, max) => {
  if (value < 0) { return '0'; }
  if (max > 0 && value > max) { return `${max}+`; }
  return String(value);
};

const BadgeComponent = styled.div`
  background-color: ${({ type, theme: { badge } }) => {
    switch (type) {
      case 'primary': return badge.bg.primary; break;
      case 'inverted': return badge.bg.inverted; break;
      case 'added': return badge.bg.added; break;
      case 'removed': return badge.bg.removed; break;
      default: return badge.bg.default; break;
    }
  }};
  color: ${({ type, theme: { badge } }) => {
    switch (type) {
      case 'primary': return badge.color.primary; break;
      case 'inverted': return badge.color.inverted; break;
      case 'added': return badge.color.added; break;
      case 'removed': return badge.color.removed; break;
      default: return badge.color.default; break;
    }
  }};
  border-radius: ${({ theme: { badge } }) => badge.border.radius};
  font-family: ${({ theme }) => theme.fontFamily};
  display: inline-flex;
  position: relative;
  vertical-align: middle;
  font-size: ${({ theme: { badge } }) => badge.font.size};
  padding-left: 6px;
  padding-right: 6px;

  ${({ type, theme: { badge } }) => type === 'inverted' && css`
    border: 1px solid ${badge.border.color};
  `}
  ${({ hasChildren }) => hasChildren && css`
    position: absolute;
    top: 0;
    right: 10px;
    transform: translateY(-50%) translateX(100%);
  `}
`;

BadgeComponent.defaultProps = { theme: configTheme({}) };

const BadgeChildrenComponent = styled.div`
  position: relative;
`;

const Badge = ({
  value, max, children, ...props
}) => {
  if (children) {
    return (
      <BadgeChildrenComponent>
        {children}
        <BadgeComponent {...props} hasChildren>
          {getValue(value, max)}
        </BadgeComponent>
      </BadgeChildrenComponent>
    );
  }
  return (
    <BadgeComponent {...props}>{getValue(value, max)}</BadgeComponent>
  );
};

Badge.propTypes = {
  /**
   * Children.
   */
  children: PropTypes.node,
  /**
   * The value displayed inside the Badge.
   */
  value: PropTypes.number,
  /**
   * The maximum value to display. If the value is 200 and the maximum is 99,
   * will appear **99+**.
   */
  max: PropTypes.number,
  /**
   * Type of Badge.
   */
  type: PropTypes.oneOf(['default', 'inverted', 'primary', 'added', 'removed']),
};

Badge.defaultProps = {
  children: null,
  max: 99,
  type: 'default',
  value: 0,
};

export default Badge;
