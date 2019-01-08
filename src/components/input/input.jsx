import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { variant } from 'styled-system'
import chroma from 'chroma-js'
import Box from '../box'
import Flex from '../flex'
import { themed } from '../../utils'

const inputSize = variant({
  key: 'inputSizes',
  prop: 'size',
})

const Input = styled(Flex)(
  props => ({
    outline: 'none',
    fontFamily: 'inherit',
    border: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    paddingTop: props.theme.space[2],
    paddingBottom: props.theme.space[2],
    paddingLeft: props.theme.space[3],
    paddingRight: props.theme.space[3],
    fontSize: props.theme.fontSizes[2],
    color: props.theme.colors.black,
    backgroundColor: props.theme.colors.white,
    borderColor: props.error
      ? chroma(props.theme.colors.danger[0])
          .alpha(0.4)
          .css()
      : props.theme.colors.default[1],
    width: props.full ? '100%' : 'auto',
    '&::placeholder': {
      color: props.error
        ? chroma(props.theme.colors.danger[0])
            .alpha(0.4)
            .css()
        : props.theme.colors.default[2],
    },
    '&:disabled': {
      opacity: 0.5,
      pointerEvents: 'none',
    },
    '&:hover': {
      borderColor: props.error
        ? props.theme.colors.danger[1]
        : props.theme.colors.default[2],
    },
    '&:focus': {
      zIndex: 1,
      borderColor: props.error
        ? props.theme.colors.danger[1]
        : props.theme.colors.primary[1],
      boxShadow: `${chroma(
        props.error
          ? props.theme.colors.danger[0]
          : props.theme.colors.primary[0]
      )
        .alpha(0.4)
        .css()} 0 0 0 ${props.theme.space[1]}px`,
      '&::placeholder': {
        color: props.error
          ? props.theme.colors.danger[0]
          : props.theme.colors.grey[0],
      },
    },
  }),
  inputSize,
  themed('Input')
)

Input.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
}

Input.defaultProps = {
  alignSelf: 'center',
  as: 'input',
}

const Label = styled(Box)(
  props => ({
    fontWeight: 'bold',
    fontFamily: 'inherit',
    fontSize: props.theme.fontSizes[1],
    color: props.theme.colors.grey[0],
    flexDirection: 'column',
  }),
  themed('Input')
)

Label.defaultProps = {
  as: 'label',
}

export default ({ label, ...props }) => {
  const inputProps = label
    ? {
        ...props,
        alignSelf: 'start',
        mt: 2,
      }
    : { ...props }

  return (
    <Label as={label ? 'label' : Fragment}>
      {label}
      <Input {...inputProps} />
    </Label>
  )
}
