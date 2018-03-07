import React from 'react';
import { render } from 'enzyme';
import RadioGroup from '../radio-group';

describe('RadioGroup', () => {
  it('renders correctly', () => {
    const items = [
      { name: 'color', value: 'red', label: 'Red' },
      { name: 'color', value: 'blue', label: 'Blue' },
      { name: 'color', value: 'yellow', label: 'Yellow' },
      { name: 'color', value: 'green', label: 'Green' },
    ];
    const wrapper = render(<RadioGroup items={items} />);
    expect(wrapper).toMatchSnapshot();
  });
});
