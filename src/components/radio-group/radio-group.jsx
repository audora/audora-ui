import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Radio from '../radio';
import Label from '../label';

const RadioGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RadioGroup = ({
  items, label, onChange, isDisabled, ...props
}) => (
  <RadioGroupContainer {...props}>
    {label && (
      <Label content={label} isDisabled={isDisabled} />
    )}
    {items.map(radio => (
      <Radio
        key={radio.value}
        onChange={onChange}
        isDisabled={isDisabled || radio.isDisabled}
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
   * Disable all radios.
   */
  isDisabled: PropTypes.bool,
  /**
   * Handler to be called when change a radio.
   */
  onChange: PropTypes.func,
};

RadioGroup.defaultProps = {
  isDisabled: false,
  items: [],
  label: null,
  onChange: () => 0,
};

export default RadioGroup;
