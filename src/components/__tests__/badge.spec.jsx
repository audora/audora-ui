import React from 'react';
import { render, mount } from 'enzyme';
import Badge from '../badge';

describe('Badge', () => {
  it('renders correctly', () => {
    const wrapper = render(<Badge value={99} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders all types correctly', () => {
    const testCases = [
      { type: 'default' },
      { type: 'inverted' },
      { type: 'primary' },
      { type: 'added' },
      { type: 'removed' },
    ];

    testCases.forEach((props) => {
      const wrapper = mount(<Badge {...props} />);
      expect(wrapper.props().type).toEqual(props.type);
    });
  });
});
