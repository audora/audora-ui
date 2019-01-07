import React, { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { borderRadius } from 'styled-system'
import Flex from '../flex'
import Button from '../button'
import { themed } from '../../utils'

const ListElement = styled(Flex)(
  { flexDirection: 'column' },
  borderRadius,
  themed('List')
)

const List = ({ children, size, as, ...rest }) => (
  <ListElement {...rest}>
    {Children.map(children, (child, idx) => {
      if (child === null || child === false) {
        return child
      }

      return cloneElement(child, {
        key: idx,
        mt: idx === 0 ? 0 : 2,
        size,
        as,
        justifyContent: 'space-between',
        alignItems: 'center',
      })
    })}
  </ListElement>
)

List.propTypes = {
  ...borderRadius.propTypes,
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
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

List.defaultProps = {
  children: '',
  size: 'medium',
  as: 'a',
}

List.Item = ({ children, variant, count, selected, ...rest }) => {
  const variantProp = selected ? 'primary' : 'subtle'

  return (
    <Button variant={variantProp} full {...rest}>
      <Flex>{children}</Flex>
      {count && <b>{count}</b>}
    </Button>
  )
}

export default List
