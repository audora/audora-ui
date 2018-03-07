import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Radio from './radio';

const RadioGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioGroupLabelContainer = styled.strong`
  font-size: 14px;
`;

const RadioGroup = ({
  items, label, onChange, ...props
}) => (
  <RadioGroupContainer {...props}>
    {label && (
      <RadioGroupLabelContainer>{label}</RadioGroupLabelContainer>
    )}
    {items.map(radio => (
      <Radio
        key={radio.value}
        onChange={onChange}
        isDisabled={radio.isDisabled}
        isSelected={radio.isSelected}
        label={radio.label}
        name={radio.name}
        value={radio.value}
      />
    ))}
  </RadioGroupContainer>
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
   * Handler to be called when change a radio.
   */
  onChange: PropTypes.func,
};

RadioGroup.defaultProps = {
  items: [],
  label: null,
  onChange: () => 0,
};

export default RadioGroup;
