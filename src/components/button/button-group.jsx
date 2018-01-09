import React from 'react';
import PropTypes from 'prop-types';
import Content from '../content';

import './button-group.scss';

const ButtonGroup = ({
  children
}) => (
  <Content className="button-group">
    {children}
  </Content>
);

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ButtonGroup;