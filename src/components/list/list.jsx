import React, { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import ListElement from './element'
import Button from '../button'

const List = ({ children, size, is, ...rest }) => (
  <ListElement {...rest}>
    {Children.map(children, (child, idx) => {
      if (child === null || child === false) {
        return child
      }

      return cloneElement(child, {
        key: idx,
        mt: idx === 0 ? 0 : 2,
        size,
        is,
        justifyContent: 'space-between',
      })
    })}
  </ListElement>
)

List.propTypes = {
  /**
   * Items to be rendered.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Sizes of buttons.
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Items to be rendered.
   */
  is: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

List.defaultProps = {
  children: '',
  size: 'medium',
  is: 'a',
}

List.Item = ({ children, content, variant, count, selected, ...rest }) => {
  const variantProp = selected ? 'primary' : 'subtle'

  return (
    <Button variant={variantProp} full {...rest}>
      {children || content}
      {count && <b>{count}</b>}
    </Button>
  )
}

export default List
