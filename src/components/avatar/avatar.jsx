import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Icon from '../icon';
import configTheme from '../../theme/config';

/**
 * TODO: add tooltip and remove title on AvatarImgComponent
 */

const Container = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  align-items: center;
  background-color: ${({ theme: { avatar }, background }) => background || avatar.bg};
  border-radius: ${({ square, theme: { avatar } }) =>
    (square ? avatar.border.radius.square : avatar.border.radius.circle)
};
  color: ${({ theme: { avatar }, color }) => color || avatar.color};
  cursor: default;
  display: flex;
  font-weight: ${({ theme: { avatar } }) => avatar.font.weight};
  justify-content: center;
  user-select: none;

  /**
   * SIZES
   */

  ${({ size }) => size === 'tiny' && css`
    font-size: ${({ theme: { avatar } }) => avatar.font.size.xs};
    height: ${({ theme: { avatar } }) => avatar.height.xs};
    width: ${({ theme: { avatar } }) => avatar.width.xs};
  `}

  ${({ size }) => size === 'small' && css`
    font-size: ${({ theme: { avatar } }) => avatar.font.size.sm};
    height: ${({ theme: { avatar } }) => avatar.height.sm};
    width: ${({ theme: { avatar } }) => avatar.width.sm};
  `}

  ${({ size }) => size === 'medium' && css`
    font-size: ${({ theme: { avatar } }) => avatar.font.size.md};
    height: ${({ theme: { avatar } }) => avatar.height.md};
    width: ${({ theme: { avatar } }) => avatar.width.md};
  `}

  ${({ size }) => size === 'large' && css`
    font-size: ${({ theme: { avatar } }) => avatar.font.size.lg};
    height: ${({ theme: { avatar } }) => avatar.height.lg};
    width: ${({ theme: { avatar } }) => avatar.width.lg};
  `}

  ${({ size }) => size === 'huge' && css`
    font-size: ${({ theme: { avatar } }) => avatar.font.size.xl};
    height: ${({ theme: { avatar } }) => avatar.height.xl};
    width: ${({ theme: { avatar } }) => avatar.width.xl};
  `}
`;

Container.defaultProps = { theme: configTheme({}) };

const AvatarImgComponent = styled.div`
  height: 100%;
  width: 100%;
  border-radius: ${({ square, theme: { avatar } }) =>
    (square ? avatar.border.radius.square : avatar.border.radius.circle)
};
  background-image: url(${({ img }) => img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

AvatarImgComponent.defaultProps = { theme: configTheme({}) };

const render = (name, img, icon, size, color) => {
  const SIZES_ICON = {
    small: 'small',
    medium: 'small',
    large: 'medium',
    huge: 'large',
  };

  if (img) {
    return (<AvatarImgComponent img={img} title={name} />);
  }

  if (icon) {
    return (
      <Icon
        color={color}
        name={icon}
        size={SIZES_ICON[size]}
      />
    );
  }

  return name.substr(0, 1).toUpperCase();
};

const Avatar = ({
  name, img, icon, ...props
}) => (
  <Container {...props}>
    {render(name, img, icon, props.size, props.color)}
  </Container>
);

Avatar.propTypes = {
  /**
   * Title to avatar.
   */
  name: PropTypes.string,
  /**
   * URL of image.
   */
  img: PropTypes.string,
  /**
   * Use icon as avatar.
   */
  icon: PropTypes.string,
  /**
   * Set a background-color avatar.
   */
  background: PropTypes.string,
  /**
   * Set a color avatar.
   */
  color: PropTypes.string,
  /**
   * Sets the avatar as square.
   */
  square: PropTypes.bool,
  /**
   * Avatar size.
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
};

Avatar.defaultProps = {
  name: '',
  img: null,
  background: null,
  color: null,
  icon: null,
  square: false,
  size: 'medium',
};

export default Avatar;
