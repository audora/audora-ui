import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './icon.scss';

const Icon = ({
  className,
  color,
  name,
  onClick,
  reversed,
  size,
}) => (
  <span
    onClick={onClick}
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
  onClick: PropTypes.object,
}

Icon.defaultProps = {
  className: '',
  color: '',
  onClick: () => 0,
  reversed: false,
  size: 'medium',
}

export default Icon;