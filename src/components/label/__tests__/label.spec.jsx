import React from 'react';
import { render } from 'enzyme';
import Label from '../label';

describe('Label', () => {
  it('renders correctly', () => {
    const wrapper = render(<Label content="Test Label" />);
    expect(wrapper).toMatchSnapshot();
  });
});
