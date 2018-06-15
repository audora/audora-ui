import React, { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const CheckboxGroup = ({ children, ...props }) => (
  <Container {...props}>
    {Children.map(children, (child, idx) => {
      if (child === null || child === false) {
        return child
      }
      return cloneElement(child, { key: idx })
    })}
  </Container>
)

CheckboxGroup.propTypes = {
  /**
   * Checkboxs to render.
   */
  children: PropTypes.node.isRequired,
}

export default CheckboxGroup
