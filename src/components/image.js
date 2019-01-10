import styled from 'styled-components'
import { height } from 'styled-system'
import { themed } from '../utils'
import Box from './box'

const Image = styled(Box)(
  {
    maxWidth: '100%',
    height: 'auto',
  },
  height,
  themed('Image')
)

Image.propTypes = {
  ...height.propTypes,
}

Image.defaultProps = {
  as: 'img',
  m: 0,
}

export default Image
