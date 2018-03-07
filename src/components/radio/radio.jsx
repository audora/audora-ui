import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const RadioContainer = styled.label`
  display: flex;
  align-items: center;
`;

const RadioLabelContainer = styled.span`
  margin-left: 5px;
`;

const Radio = ({
  isDisabled,
  isSelected,
  label,
  name,
  onChange,
  required,
  value,
  ...props
}) => (
  <RadioContainer
    {...props}
    onChange={(e) => {
      if (isDisabled) {
        e.preventDefault();
        return;
      }

      onChange(e, { value, name, label });
    }}
  >
    <input
      type="radio"
      name={name}
      required={required}
      value={value}
      defaultChecked={isSelected}
      disabled={isDisabled}
    />
    <RadioLabelContainer>{label}</RadioLabelContainer>
  </RadioContainer>
);

Radio.propTypes = {
  /**
   * Name of radio.
   */
  name: PropTypes.string,
  /**
   * Value of radio.
   */
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Text to be rendered on label.
   */
  label: PropTypes.string,
  /**
   * Set radio required.
   */
  required: PropTypes.bool,
  /**
   * Handler to be called when change a radio.
   */
  onChange: PropTypes.func,
  /**
   * Radio disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * Radio default checked.
   */
  isSelected: PropTypes.bool,
};

Radio.defaultProps = {
  isDisabled: false,
  isSelected: false,
  label: null,
  name: null,
  required: false,
  value: null,
  onChange: () => 0,
};

export default Radio;
