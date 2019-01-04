import styled from 'styled-components'
import {
  space,
  width,
  height,
  fontSize,
  color,
  flex,
  alignSelf,
} from 'styled-system'
import { themed } from '../../utils'

const Box = styled('div')(
  {
    boxSizing: 'border-box',
  },
  space,
  width,
  height,
  fontSize,
  color,
  flex,
  alignSelf,
  themed('Box')
)

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...alignSelf.propTypes,
}

export default Box
