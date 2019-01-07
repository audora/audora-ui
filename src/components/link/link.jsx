import styled from 'styled-components'
import PropTypes from 'prop-types'
import { fontFamily } from 'styled-system'
import { themed } from '../../utils'
import Box from '../box'

const Link = styled(Box)(
  props => ({
    textDecoration: props.underline ? 'underline' : 'none',
  }),
  fontFamily,
  themed('Link')
)

Link.propTypes = {
  underline: PropTypes.bool,
  ...fontFamily.propTypes,
}

Link.defaultProps = {
  as: 'a',
  color: 'primary.normal',
  fontFamily: 'sans',
}

export default Link
