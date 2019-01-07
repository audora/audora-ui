import styled from 'styled-components'
import { height, borderRadius } from 'styled-system'
import { themed } from '../../utils'
import Box from '../box'

const Image = styled(Box)(
  {
    maxWidth: '100%',
    height: 'auto',
  },
  height,
  borderRadius,
  themed('Image')
)

Image.propTypes = {
  ...height.propTypes,
  ...borderRadius.propTypes,
}

Image.defaultProps = {
  as: 'img',
  m: 0,
}

export default Image
