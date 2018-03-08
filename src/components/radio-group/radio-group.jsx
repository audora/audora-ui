import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Radio from '../radio';
import Label from '../label';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioGroup = ({
  items, label, onChange, disabled, ...props
}) => (
  <Container {...props}>
    {label && (
      <Label content={label} disabled={disabled} />
    )}
    {items.map(radio => (
      <Radio
        key={radio.value}
        onChange={onChange}
        disabled={disabled || radio.disabled}
        isSelected={radio.isSelected}
        label={radio.label}
        name={radio.name}
        value={radio.value}
      />
    ))}
  </Container>
);

RadioGroup.propTypes = {
  /**
   * Radios.
   */
  items: PropTypes.array,
  /**
   * Text to be rendered on label.
   */
  label: PropTypes.string,
  /**
   * Disable all radios.
   */
  disabled: PropTypes.bool,
  /**
   * Handler to be called when change a radio.
   */
  onChange: PropTypes.func,
};

RadioGroup.defaultProps = {
  disabled: false,
  items: [],
  label: null,
  onChange: () => 0,
};

export default RadioGroup;
