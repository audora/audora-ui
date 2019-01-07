import styled from 'styled-components'
import PropTypes from 'prop-types'
import { themed } from '../../utils'
import Box from '../box'

const Link = styled(Box)(
  props => ({
    textDecoration: props.underline ? 'underline' : 'none',
  }),
  themed('Link')
)

Link.propTypes = {
  underline: PropTypes.bool,
}

Link.defaultProps = {
  as: 'a',
  color: 'primary.0',
}

export default Link
