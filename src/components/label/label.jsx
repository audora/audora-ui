import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lighten } from '../../utils';
import configTheme from '../../theme/config';

const Container = styled.label`
  font-weight: ${({ theme: { label } }) => label.font.weight};
  font-size: ${({ theme: { label } }) => label.font.size};
  color: ${({ isDisabled, theme: { label } }) =>
    (isDisabled ? lighten(label.color, 0.7) : label.color)
};
`;

Container.defaultProps = { theme: configTheme({}) };

const Label = ({ content, isDisabled }) => (
  <Container isDisabled={isDisabled}>{content}</Container>
);

Label.propTypes = {
  /**
   * Text to be rendered.
   */
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Disable label.
   */
  isDisabled: PropTypes.bool,
};

Label.defaultProps = {
  isDisabled: false,
  content: null,
};

export default Label;
