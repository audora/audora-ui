import React, { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import merge from 'lodash.merge'

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const ButtonGroup = ({ children, compressed, ...props }) => {
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
    <Container {...props}>
      {Children.map(children, (child, idx) => {
        if (child === null || child === false) {
          return child
        }
        return cloneElement(child, {
          key: idx,
          style: buttonStyle(child.props.style, idx),
        })
      })}
    </Container>
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
