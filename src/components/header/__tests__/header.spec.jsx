import React from 'react';
import { render, mount } from 'enzyme';
import Header from '../header';

describe('Header', () => {
  it('renders correctly', () => {
    const wrapper = render(<Header full={false}><p>header</p></Header>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when full', () => {
    const wrapper = mount(<Header full><p>header</p></Header>);
    expect(wrapper.props().full).toBe(true);
  });

  it('renders correctly when fixed', () => {
    const wrapper = mount(<Header fixed><p>header</p></Header>);
    expect(wrapper.props().fixed).toBe(true);
  });
});
