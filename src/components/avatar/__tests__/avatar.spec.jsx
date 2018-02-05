import React from 'react';
import { render, mount } from 'enzyme';
import Avatar from '../avatar';

describe('Avatar', () => {
  it('renders correctly', () => {
    const wrapper = render(<Avatar name="João" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when square', () => {
    const wrapper = mount(<Avatar name="João" square />);
    expect(wrapper.props().square).toBe(true);
  });

  it('renders image correctly', () => {
    const image = 'https://avatars3.githubusercontent.com/u/10627086?s=40&v=4';
    const wrapper = mount(<Avatar name="João" img={image} />);
    expect(wrapper.props().img).toEqual(image);
  });

  it('renders all sizes correctly', () => {
    const testCases = [
      { size: 'tiny' },
      { size: 'small' },
      { size: 'medium' },
      { size: 'large' },
      { size: 'huge' },
    ];

    testCases.forEach((props) => {
      const wrapper = mount(<Avatar {...props} />);
      expect(wrapper.props().size).toEqual(props.size);
    });
  });
});
