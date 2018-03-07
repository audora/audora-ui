import React from 'react';
import { render } from 'enzyme';
import Radio from '../radio';

describe('Radio', () => {
  it('renders correctly', () => {
    const component = (<Radio label="Test radio" name="testRadio" value={1} />);
    const wrapper = render(component);
    expect(wrapper).toMatchSnapshot();
  });
});
