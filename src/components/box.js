import styled from 'styled-components'
import {
  alignSelf,
  borderRadius,
  color,
  flex,
  fontSize,
  height,
  space,
  width,
} from 'styled-system'
import { themed } from '../utils'

const Box = styled('div')(
  {
    boxSizing: 'border-box',
  },
  alignSelf,
  borderRadius,
  color,
  flex,
  fontSize,
  height,
  space,
  width,
  themed('Box')
)

Box.propTypes = {
  ...alignSelf.propTypes,
  ...borderRadius.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...fontSize.propTypes,
  ...height.propTypes,
  ...space.propTypes,
  ...width.propTypes,
}

export default Box
