import React from 'react';
import PropTypes from 'prop-types';
import './icon.scss';

const Icon = ({
  name
}) => (
  <span
    className="icon"
    dangerouslySetInnerHTML={{ __html: require(`./feather/${name}.svg`) }}
  />
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Icon;