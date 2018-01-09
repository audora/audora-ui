import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './icon.scss';

const Icon = ({
  className,
  color,
  name,
  reversed,
  size,
}) => (
  <span
    className={cn(
      "icon",
      name === "loader" && "icon--loader",
      reversed && "icon--reversed",
      size !== "medium" && `icon--${size}`,
      className
    )}
    dangerouslySetInnerHTML={{ __html: require(`./feather/${name}.svg`) }}
    style={{ color }}
  />
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  reversed: PropTypes.bool,
  size: PropTypes.oneOf([
    "small",
    "medium",
    "large",
    "xlarge",
  ]),
}

Icon.defaultProps = {
  className: '',
  color: '',
  reversed: false,
  size: 'medium',
}

export default Icon;