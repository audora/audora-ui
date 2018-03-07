import React from 'react';
import { render } from 'enzyme';
import Breadcrumbs from '../breadcrumbs';

describe('Breadcrumbs', () => {
  it('renders correctly', () => {
    const items = [
      { text: 'Pages', href: '#' },
      { text: 'Home', href: '#' },
      { text: 'Breadcrumbs', href: '#' },
    ];

    const wrapper = render(<Breadcrumbs items={items} />);
    expect(wrapper).toMatchSnapshot();
  });
});
