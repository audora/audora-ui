import React from 'react';
import { render, mount } from 'enzyme';
import Menu from '../menu';

describe('Menu', () => {
  it('renders correctly', () => {
    const wrapper = render(<Menu
      items={[
        {
          key: 1,
          name: 'item1',
          content: 'Item 1',
          onClick: (e, data) => console.log(e, data),
        }]}
    />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when minimal', () => {
    const wrapper = mount(<Menu
      items={[
        {
          key: 1,
          name: 'item1',
          content: 'Item 1',
          onClick: (e, data) => console.log(e, data),
        }]}
      minimal
    />);
    expect(wrapper.props().minimal).toBe(true);
  });
});
