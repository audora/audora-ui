import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { lighten, darken } from '../../utils';
import Icon from '../icon';
import configTheme from '../../theme/config';

const Container = styled.button`
  align-items: center;
  font-family: ${({ theme }) => theme.fontFamily};
  border-radius: ${({ theme: { btn } }) => btn.border.radius};
  border: none;
  cursor: pointer;
  display: inline-flex;
  font-weight: ${({ theme: { btn } }) => btn.font.weight};
  transition: background-color .1s;
  position: relative;
  touch-action: manipulation;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;

  &:hover {
    background-color: ${({ appearance, theme: { btn } }) => {
    switch (appearance) {
      case 'primary': return lighten(btn.bg.primary, 0.15); break;
      case 'subtle': return btn.bg.default; break;
      default: return darken(btn.bg.default, 0.04); break;
    }
  }};
  }
  &:active {
    svg {
      color: ${({ appearance, theme: { btn } }) => {
    switch (appearance) {
      case 'primary': return btn.color.primary; break;
      case 'subtle': return btn.bg.primary; break;
      default: return btn.bg.primary; break;
    }
  }};
    }
    color: ${({ appearance, theme: { btn } }) => {
    switch (appearance) {
      case 'primary': return btn.color.primary; break;
      case 'subtle': return btn.bg.primary; break;
      default: return btn.bg.primary; break;
    }
  }};
    background-color: ${({ appearance, theme: { btn } }) => {
    switch (appearance) {
      case 'primary': return btn.bg.primary; break;
      case 'subtle': return lighten(btn.bg.primary, 0.8); break;
      default: return lighten(btn.bg.primary, 0.8); break;
    }
  }};
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
   * APPEARANCEs
   */

  ${({ appearance }) => appearance === 'primary' && css`
    background-color: ${({ theme: { btn } }) => btn.bg.primary};
    color: ${({ theme: { btn } }) => btn.color.primary};
  `}

  ${({ appearance }) => appearance === 'default' && css`
    background-color: ${({ theme: { btn } }) => btn.bg.default};
    color: ${({ theme: { btn } }) => btn.color.default};
  `}

  ${({ appearance }) => appearance === 'subtle' && css`
    background-color: ${({ theme: { btn } }) => btn.bg.subtle};
    color: ${({ theme: { btn } }) => btn.color.subtle};
  `}

  /**
   * SIZES
   */

  ${({ size }) => size === 'tiny' && css`
    font-size: ${({ theme: { btn } }) => btn.font.size.sm};
    height: ${({ theme: { btn } }) => btn.height.xs};
    padding-left: ${({ theme: { btn } }) => btn.spacing.xs};
    padding-right: ${({ theme: { btn } }) => btn.spacing.xs};
    text-transform: uppercase;
  `}

  ${({ size }) => size === 'small' && css`
    font-size: ${({ theme: { btn } }) => btn.font.size.sm};
    height: ${({ theme: { btn } }) => btn.height.sm};
    padding-left: ${({ theme: { btn } }) => btn.spacing.xs};
    padding-right: ${({ theme: { btn } }) => btn.spacing.xs};
  `}

  ${({ size }) => size === 'medium' && css`
    font-size: ${({ theme: { btn } }) => btn.font.size.md};
    height: ${({ theme: { btn } }) => btn.height.md};
    padding-left: ${({ theme: { btn } }) => btn.spacing.sm};
    padding-right: ${({ theme: { btn } }) => btn.spacing.sm};
  `}

  ${({ size }) => size === 'large' && css`
    font-size: ${({ theme: { btn } }) => btn.font.size.lg};
    height: ${({ theme: { btn } }) => btn.height.lg};
    padding-left: ${({ theme: { btn } }) => btn.spacing.md};
    padding-right: ${({ theme: { btn } }) => btn.spacing.md};
  `}
`;

Container.defaultProps = { theme: configTheme({}) };

const ButtonIconComponent = styled(Icon)`
  color: ${({ theme: { btn } }) => btn.color.icon};

  ${({ appearance }) => appearance === 'primary' && css`
    color: ${({ theme: { btn } }) => btn.color.iconPrimary};
  `}

  ${({ content }) => !content && css`
    margin-left: -5px;
    margin-right: -5px;
  `}

  ${({ position, content }) => position === 'left' && content && css`
    margin-right: ${({ theme: { btn } }) => btn.spacing.xs};
  `}

  ${({ position, content }) => position === 'right' && content && css`
    margin-left: ${({ theme: { btn } }) => btn.spacing.xs};
  `}
`;

ButtonIconComponent.defaultProps = { theme: configTheme({}) };

const sizeProp = (size) => {
  if (size === 'medium') {
    return 'small';
  }
  if (size === 'large') {
    return 'medium';
  }

  return size;
};

const Button = ({
  appearance,
  content,
  icon,
  iconPosition,
  loading,
  onClick,
  size,
  type,
  ...props
}) => (
  <Container
    {...props}
    type={type}
    appearance={appearance}
    size={size}
    onClick={(e) => {
      if (props.disabled || loading) {
        e.preventDefault();
        return;
      }

      onClick(e, props);
    }}
  >
    {((icon && iconPosition === 'left') || loading) && (
      <ButtonIconComponent
        content={content}
        name={loading ? 'loader' : icon}
        position="left"
        size={sizeProp(size)}
        spin={loading}
        appearance={appearance}
      />
    )}
    {content}
    {(icon && iconPosition === 'right' && !loading) && (
      <ButtonIconComponent
        content={content}
        name={icon}
        position="right"
        size={sizeProp(size)}
        appearance={appearance}
      />
    )}
  </Container>
);

Button.propTypes = {
  /**
   * Text to be rendered.
   */
  content: PropTypes.node,
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
   * Type of button.
   */
  type: PropTypes.string,
  /**
   * Appearances of button.
   */
  appearance: PropTypes.oneOf(['primary', 'default', 'subtle']),
};

Button.defaultProps = {
  appearance: 'default',
  content: null,
  disabled: false,
  full: false,
  icon: '',
  iconPosition: 'left',
  loading: false,
  onClick: () => 0,
  size: 'medium',
  type: 'button',
};

export default Button;
