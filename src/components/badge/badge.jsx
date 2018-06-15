import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import configTheme from '../../theme/config'

const getValue = (value, max) => {
  if (value < 0) {
    return '0'
  }
  if (max > 0 && value > max) {
    return `${max}+`
  }
  return String(value)
}

const getBGColorContainer = (type, theme) => {
  if (type === 'primary') {
    return theme.bg.primary
  }
  if (type === 'inverted') {
    return theme.bg.inverted
  }
  if (type === 'added') {
    return theme.bg.added
  }
  if (type === 'removed') {
    return theme.bg.removed
  }

  return theme.bg.default
}

const getColorContainer = (type, theme) => {
  if (type === 'primary') {
    return theme.color.primary
  }
  if (type === 'inverted') {
    return theme.color.inverted
  }
  if (type === 'added') {
    return theme.color.added
  }
  if (type === 'removed') {
    return theme.color.removed
  }

  return theme.color.default
}

const Container = styled.div`
  background-color: ${({ type, theme: { badge } }) =>
    getBGColorContainer(type, badge)};
  color: ${({ type, theme: { badge } }) => getColorContainer(type, badge)};
  border-radius: ${({ theme: { badge } }) => badge.border.radius};
  font-family: ${({ theme }) => theme.fontFamily};
  display: inline-flex;
  position: relative;
  vertical-align: middle;
  font-size: ${({ theme: { badge } }) => badge.font.size};
  padding-left: 6px;
  padding-right: 6px;

  ${({ type, theme: { badge } }) =>
    type === 'inverted' &&
    css`
      border: 1px solid ${badge.border.color};
    `} ${({ hasChildren }) =>
    hasChildren &&
    css`
      position: absolute;
      top: 0;
      right: 10px;
      transform: translateY(-50%) translateX(100%);
    `};
`

Container.defaultProps = { theme: configTheme({}) }

const BadgeChildrenComponent = styled.div`
  position: relative;
`

const Badge = ({ value, max, children, ...props }) => {
  if (children) {
    return (
      <BadgeChildrenComponent>
        {children}
        <Container {...props} hasChildren>
          {getValue(value, max)}
        </Container>
      </BadgeChildrenComponent>
    )
  }
  return <Container {...props}>{getValue(value, max)}</Container>
}

Badge.propTypes = {
  /**
   * Children.
   */
  children: PropTypes.node,
  /**
   * The value displayed inside the Badge.
   */
  value: PropTypes.number,
  /**
   * The maximum value to display. If the value is 200 and the maximum is 99,
   * will appear **99+**.
   */
  max: PropTypes.number,
  /**
   * Type of Badge.
   */
  type: PropTypes.oneOf(['default', 'inverted', 'primary', 'added', 'removed']),
}

Badge.defaultProps = {
  children: null,
  max: 99,
  type: 'default',
  value: 0,
}

export default Badge
