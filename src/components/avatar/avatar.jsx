import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AvatarElement from './element'

const AvatarImgComponent = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${({ img }) => img});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`

const getName = name => name.substr(0, 1).toUpperCase()

const getContent = (name, img) => {
  if (img) {
    return <AvatarImgComponent img={img} title={name} />
  }

  return getName(name)
}

const Avatar = ({ size, square, style, name, img, ...rest }) => {
  const avatarProps = {
    size,
    square,
    ...rest,
  }

  return <AvatarElement {...avatarProps}>{getContent(name, img)}</AvatarElement>
}

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
   * Sets the avatar as square.
   */
  square: PropTypes.bool,
  /**
   * Avatar size.
   */
  size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'huge']),
}

Avatar.defaultProps = {
  img: null,
  name: '',
  size: 'medium',
  square: false,
}

export default Avatar
