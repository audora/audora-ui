import React from 'react'
import { render, shallow } from 'enzyme'
import 'jest-styled-components'
import Avatar from '../avatar'
import Theme from '../../../theme'

const shallowWithTheme = tree => {
  const context = shallow(<Theme />)
    .instance()
    .getChildContext()
  return shallow(tree, { context })
}

describe('Avatar', () => {
  it('renders correctly', () => {
    const wrapper = shallowWithTheme(<Avatar name="João" />)

    expect(wrapper).toMatchSnapshot()
  })

  it('renders correctly when square', () => {
    const wrapper = render(
      <Theme>
        <Avatar name="João" square />
      </Theme>
    )
    // expect(wrapper).toHaveStyleRule('square')
    expect(wrapper.props().square).toBe(true)
  })

  it('renders image correctly', () => {
    const image = 'https://avatars3.githubusercontent.com/u/10627086?s=40&v=4'
    const wrapper = render(
      <Theme>
        <Avatar name="João" img={image} />
      </Theme>
    )
    expect(wrapper.props().img).toEqual(image)
  })

  it('renders all sizes correctly', () => {
    const testCases = [
      { size: 'tiny' },
      { size: 'small' },
      { size: 'medium' },
      { size: 'large' },
      { size: 'huge' },
    ]

    testCases.forEach(props => {
      const wrapper = render(
        <Theme>
          <Avatar {...props} />
        </Theme>
      )

      console.log('wrapper', wrapper)

      expect(wrapper.props().size).toEqual(props.size)
    })
  })
})
