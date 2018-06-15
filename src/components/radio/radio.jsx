import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Container = styled.label`
  display: flex;
  align-items: center;
`

const RadioLabel = styled.span`
  margin-left: 5px;
`

const Radio = ({
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
    onChange={e => {
      if (disabled) {
        e.preventDefault()
        return
      }

      onChange(e, { value, name, label })
    }}
  >
    <input
      type="radio"
      name={name}
      required={required}
      value={value}
      defaultChecked={selected}
      disabled={disabled}
    />
    <RadioLabel>{label}</RadioLabel>
  </Container>
)

Radio.propTypes = {
  /**
   * Name of radio.
   */
  name: PropTypes.string,
  /**
   * Value of radio.
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
  disabled: PropTypes.bool,
  /**
   * Radio default checked.
   */
  selected: PropTypes.bool,
}

Radio.defaultProps = {
  disabled: false,
  selected: false,
  label: null,
  name: null,
  required: false,
  value: null,
  onChange: () => 0,
}

export default Radio
