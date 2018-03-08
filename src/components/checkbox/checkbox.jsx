import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.label`
  display: flex;
  align-items: center;
`;

const CheckboxLabel = styled.span`
  margin-left: 5px;
`;

const Checkbox = ({
  disabled,
  selected,
  label,
  name,
  onChange,
  required,
  value,
  ...props
}) => (
  <Container
    {...props}
    onChange={(e) => {
      if (disabled) {
        e.preventDefault();
        return;
      }

      onChange(e, {
        value,
        name,
        label,
        checked: e.target.checked,
      });
    }}
  >
    <input
      type="checkbox"
      name={name}
      required={required}
      value={value}
      defaultChecked={selected}
      disabled={disabled}
    />
    <CheckboxLabel>{label}</CheckboxLabel>
  </Container>
);

Checkbox.propTypes = {
  /**
   * Name of checkbox.
   */
  name: PropTypes.string,
  /**
   * Value of checkbox.
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
   * Set checkbox required.
   */
  required: PropTypes.bool,
  /**
   * Handler to be called when change a checkbox.
   */
  onChange: PropTypes.func,
  /**
   * Checkbox disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Checkbox default checked.
   */
  selected: PropTypes.bool,
};

Checkbox.defaultProps = {
  disabled: false,
  selected: false,
  label: null,
  name: null,
  required: false,
  value: null,
  onChange: () => 0,
};

export default Checkbox;
