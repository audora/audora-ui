import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { config } from '../theme';
import { lighten } from '../utils';
import Icon from './icon';

const ButtonComponent = styled.button`
  align-items: center;
  border-radius: ${({ theme: { btn } }) => btn.borderRadius};
  border: none;
  cursor: pointer;
  display: inline-flex;
  font-weight: ${({ theme: { btn } }) => btn.fontWeight};
  transition: background-color .1s;
  position: relative;
  touch-action: manipulation;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  &:focus {
    outline: none;
  }

  ${({ disabled }) => disabled && css`
    opacity: 0.5;
    pointer-events: none;
    cursor: default;
  `}

  ${({ full }) => full && css`
    width: 100%;
    justify-content: center;
  `}

  /**
   * TYPES
   */

  ${({ type }) => type === 'primary' && css`
    background-color: ${({ theme: { btn } }) => btn.primary.bg};
    color: ${({ theme: { btn } }) => btn.primary.color};

    &:focus {
      background-color: ${({ theme: { btn } }) => lighten(btn.primary.bg, 10)};
    }
    &:hover {
      background-color: ${({ theme: { btn } }) => lighten(btn.primary.bg, 10)};
    }
    &:active {
      background-color: ${({ theme: { btn } }) => btn.primary.bg};
    }
  `}

  ${({ type }) => type === 'default' && css`
    background-color: ${({ theme: { btn } }) => btn.default.bg};
    color: ${({ theme: { btn } }) => btn.default.color};

    &:focus {
      background-color: ${({ theme: { btn } }) => lighten(btn.default.bg, 3)};
    }
    &:hover {
      background-color: ${({ theme: { btn } }) => lighten(btn.default.bg, 3)};
    }
    &:active {
      background-color: ${({ theme: { btn } }) => btn.default.bg};
    }
  `}

  ${({ type }) => type === 'subtle' && css`
    background-color: ${({ theme: { btn } }) => btn.subtle.bg};
    color: ${({ theme: { btn } }) => btn.subtle.color};

    &:hover {
      background-color: ${({ theme: { btn } }) => btn.default.bg};
    }
    &:active {
      background-color: ${({ theme: { btn } }) => lighten(btn.primary.bg, 40)};
      color: ${({ theme: { btn } }) => btn.primary.bg};
      
      svg {
        color: ${({ theme: { btn } }) => btn.primary.bg};      
      }
    }
  `}

  /**
   * SIZES
   */

  ${({ size }) => size === 'tiny' && css`
    font-size: ${({ theme: { btn } }) => btn.fontSize.sm};
    height: ${({ theme: { btn } }) => btn.height.xs};
    padding-left: ${({ theme: { btn } }) => btn.spacing.xs};
    padding-right: ${({ theme: { btn } }) => btn.spacing.xs};
    text-transform: uppercase;
  `}

  ${({ size }) => size === 'small' && css`
    font-size: ${({ theme: { btn } }) => btn.fontSize.sm};
    height: ${({ theme: { btn } }) => btn.height.sm};
    padding-left: ${({ theme: { btn } }) => btn.spacing.xs};
    padding-right: ${({ theme: { btn } }) => btn.spacing.xs};
  `}
  
  ${({ size }) => size === 'medium' && css`
    font-size: ${({ theme: { btn } }) => btn.fontSize.base};
    height: ${({ theme: { btn } }) => btn.height.md};
    padding-left: ${({ theme: { btn } }) => btn.spacing.sm};
    padding-right: ${({ theme: { btn } }) => btn.spacing.sm};
  `}
  
  ${({ size }) => size === 'large' && css`
    font-size: ${({ theme: { btn } }) => btn.fontSize.lg};
    height: ${({ theme: { btn } }) => btn.height.lg};
    padding-left: ${({ theme: { btn } }) => btn.spacing.md};
    padding-right: ${({ theme: { btn } }) => btn.spacing.md};
  `}
`;

ButtonComponent.defaultProps = { theme: config };

const ButtonIcon = styled(Icon)`
  color: ${({ theme: { btn } }) => btn.icon.color};
  
  ${({ type }) => type === 'primary' && css`
    color: ${({ theme: { btn } }) => btn.icon.primary};
  `}

  ${({ content }) => !content && css`
    margin-left: -5px;
    margin-right: -5px;
  `}

  ${({ position, content }) => position === 'left' && content && css`
    margin-left: -5px;
    margin-right: ${({ theme: { btn } }) => btn.icon.margin};
  `}

  ${({ position, content }) => position === 'right' && content && css`
    margin-right: -5px;
    margin-left: ${({ theme: { btn } }) => btn.icon.margin};
  `}
`;

ButtonIcon.defaultProps = { theme: config };

const Button = ({
  content,
  icon,
  iconPosition,
  loading,
  onClick,
  size,
  type,
  ...props
}) => (
  <ButtonComponent
    {...props}
    type={type}
    size={size}
    onClick={e => {
      if (props.disabled) {
        e.preventDefault();
        return;
      }

      onClick(e, props);
    }}
  >
    {((icon || loading) && iconPosition === 'left') && (
      <ButtonIcon
        content={content}
        name={loading ? 'loader' : icon}
        position="left"
        size={size === 'medium' ? 'small' : size === 'large' ? 'medium' : size}
        spin={loading}
        type={type}
      />
    )}
    {content}
    {(icon && iconPosition === 'right') && (
      <ButtonIcon
        content={content}
        name={icon}
        position="right"
        size={size === 'medium' ? 'small' : size === 'large' ? 'medium' : size}
        type={type}
      />
    )}
  </ButtonComponent>
);

Button.propTypes = {
  /**
   * Text to be rendered.
   */
  content: PropTypes.string,
  /**
   * Button disable.
   */
  disabled: PropTypes.bool,
  /**
   * Width 100%.
   */
  full: PropTypes.bool,
  /**
   * Adds an icon to the button.
   */
  icon: PropTypes.string,
  /**
   * Chooce the side of the icon.
   */
  iconPosition: PropTypes.oneOf(['left', 'right']),
  /**
   * Button loading.
   */
  loading: PropTypes.bool,
  /**
   * Handler to be called when the button is clicked.
   */
  onClick: PropTypes.func,
  /**
   * Sizes of buttons.
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
  /**
   * Optitional style replacement.
   */
  style: PropTypes.object,
  /**
   * Type of button.
   */
  type: PropTypes.oneOf(['primary', 'default', 'subtle'])
};

Button.defaultProps = {
  content: '',
  disabled: false,
  full: false,
  icon: '',
  iconPosition: 'left',
  loading: false,
  onClick: () => 0,
  size: 'medium',
  style: {},
  type: 'default'
};

export default Button;
