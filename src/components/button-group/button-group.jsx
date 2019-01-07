import React, { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import merge from 'lodash.merge'
import Flex from '../flex'

const ButtonGroup = ({ children, compressed, ...rest }) => {
  const buttonStyle = (style, idx) => {
    if (compressed) {
      if (idx === children.length - 1) {
        return merge(
          {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          },
          style
        )
      }
      if (idx === 0) {
        return merge(
          {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          },
          style
        )
      }

      return merge({ borderRadius: 0 }, style)
    }
    if (idx !== 0) {
      return merge({ marginLeft: 10 }, style)
    }

    return style
  }

  return (
    <Flex {...rest}>
      {Children.map(children, (child, idx) => {
        if (child === null || child === false) {
          return child
        }
        return cloneElement(child, {
          key: idx,
          style: buttonStyle(child.props.style, idx),
        })
      })}
    </Flex>
  )
}

ButtonGroup.propTypes = {
  /**
   * Buttons to render.
   */
  children: PropTypes.node.isRequired,
  /**
   * Mo margin between buttons.
   */
  compressed: PropTypes.bool,
}

ButtonGroup.defaultProps = {
  compressed: false,
}

export default ButtonGroup
