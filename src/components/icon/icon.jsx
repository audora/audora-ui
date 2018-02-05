import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const IconComponent = styled.span`
  color: ${({ theme: { icon } }) => icon.color};
  display: inline-block;
  line-height: 1;

  ${({ spin }) => spin && css`
    animation: ${rotate360} 3s linear infinite;
  `}

  /**
   * SIZES
   */

  ${({ size }) => size === 'tiny' && css`
    height: ${({ theme: { icon } }) => icon.size.xs};
    width: ${({ theme: { icon } }) => icon.size.xs};
  `}

  ${({ size }) => size === 'small' && css`
    height: ${({ theme: { icon } }) => icon.size.sm};
    width: ${({ theme: { icon } }) => icon.size.sm};
  `}

  ${({ size }) => size === 'medium' && css`
    height: ${({ theme: { icon } }) => icon.size.md};
    width: ${({ theme: { icon } }) => icon.size.md};
  `}

  ${({ size }) => size === 'large' && css`
    height: ${({ theme: { icon } }) => icon.size.lg};
    width: ${({ theme: { icon } }) => icon.size.lg};
  `}
`;

const Icon = ({
  name, color, style, ...props
}) => (
  <IconComponent
    {...props}
    dangerouslySetInnerHTML={{
      __html: require(`../../icons/feather/${name}.svg`),
    }}
    style={{ color }}
  />
);

Icon.propTypes = {
  /**
   * Color of icon.
   */
  color: PropTypes.string,
  /**
   * Icon size.
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  /**
   * Name of icon used on `fathericons`.
   */
  name: PropTypes.string.isRequired,
  /**
   * Rotates the icon with animation.
   */
  spin: PropTypes.bool,
  /**
   * Props of theme provided by `Themer`.
   */
  style: PropTypes.object,
};

Icon.defaultProps = {
  color: '',
  size: 'medium',
  spin: false,
  style: {},
};

export default Icon;
