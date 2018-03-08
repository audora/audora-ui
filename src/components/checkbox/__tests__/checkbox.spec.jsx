import React from 'react';
import { render } from 'enzyme';
import Checkbox from '../checkbox';

describe('Checkbox', () => {
  it('renders correctly', () => {
    const component = (<Checkbox label="Test Checkbox" name="testCheckbox" value={1} />);
    const wrapper = render(component);
    expect(wrapper).toMatchSnapshot();
  });
});
