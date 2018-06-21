import React from 'react'
import { render, mount } from 'enzyme'
import { spy } from 'sinon'
import Button from '../button'

describe('Button', () => {
  it('renders correctly', () => {
    const wrapper = render(<Button content="Primary Button" />)
    expect(wrapper).toMatchSnapshot()
  })

  it('fires the onClick prop', () => {
    const onClick = spy()
    const wrapper = mount(<Button content="Primary Button" onClick={onClick} />)

    wrapper.find('button').simulate('click')

    expect(onClick.calledOnce).toBe(true)
  })

  it('renders correctly when disabled', () => {
    const wrapper = mount(<Button disabled />)
    expect(wrapper.props().disabled).toBe(true)
  })

  it('renders correctly when full', () => {
    const wrapper = mount(<Button full />)
    expect(wrapper.props().full).toBe(true)
  })

  it('renders all sizes correctly', () => {
    const testCases = [{ size: 'small' }, { size: 'medium' }, { size: 'large' }]

    testCases.forEach(props => {
      const wrapper = mount(<Button {...props} />)
      expect(wrapper.props().size).toEqual(props.size)
    })
  })

  it('renders all types correctly', () => {
    const testCases = [
      { type: 'primary' },
      { type: 'default' },
      { type: 'subtle' },
    ]

    testCases.forEach(props => {
      const wrapper = mount(<Button {...props} />)
      expect(wrapper.props().type).toEqual(props.type)
    })
  })
})
