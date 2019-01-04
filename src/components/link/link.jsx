import React from 'react'
import PropTypes from 'prop-types'
import LinkElement from './element'

const Link = ({ href, underline, children, content, ...rest }) => {
  const linkProps = {
    href,
    underline,
    ...rest,
  }

  return <LinkElement {...linkProps}>{children || content}</LinkElement>
}

Link.propTypes = {
  /**
   * Text to be rendered.
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Text to be rendered.
   */
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Link underline.
   */
  underline: PropTypes.bool,
  /**
   * Href of link.
   */
  href: PropTypes.string,
}

Link.defaultProps = {
  children: '',
  content: '',
  href: '',
  underline: false,
}

export default Link
