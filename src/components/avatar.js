import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { config } from '../theme';

/**
 * TODO: add tooltip and remove title on AvatarImgComponent
 */

const AvatarComponent = styled.div`
  align-items: center;
  background-color: ${({ theme: { avatar } }) => avatar.bg};
  border-radius: ${({ square, theme: { avatar } }) =>
    square ? avatar.border.radius.square : avatar.border.radius.circle
  };
  color: ${({ theme: { avatar } }) => avatar.color};
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
    font-size: ${({ theme: { avatar } }) => avatar.font.size.base};
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

AvatarComponent.defaultProps = { theme: config };

const AvatarImgComponent = styled.div`
  height: 100%;
  width: 100%;
  border-radius: ${({ square, theme: { avatar } }) =>
    square ? avatar.border.radius.square : avatar.border.radius.circle
  };
  background-image: url(${({ img }) => img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

AvatarImgComponent.defaultProps = { theme: config };

const Avatar = ({ name, img, ...props }) => (
  <AvatarComponent {...props}>
    {!img
      ? name.substr(0, 1).toUpperCase()
      : (<AvatarImgComponent img={img} {...props} title={name} />)
    }
  </AvatarComponent>
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
   * Optitional style replacement.
   */
  style: PropTypes.object,
  /**
   * Sets the avatar as square.
   */
  square: PropTypes.bool,
  /**
   * Avatar size.
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge'])
};

Avatar.defaultProps = {
  name: '',
  img: '',
  style: {},
  square: false,
  size: 'medium'
};

export default Avatar;
