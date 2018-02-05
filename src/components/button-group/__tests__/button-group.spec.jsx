import React from 'react';
import { shallow } from 'enzyme';
import ButtonGroup from '../button-group';
import Button from '../../button';

describe('ButtonGroup', () => {
  it('renders correctly', () => {
    const wrapper = shallow((
      <ButtonGroup>
        <Button className="btn" content="bax" />
        <Button className="btn" content="bar" />
        <Button className="btn" content="baz" />
      </ButtonGroup>
    ));

    const texts = wrapper.find('.btn').map(node => node.props().content);
    expect(texts).toEqual(['bax', 'bar', 'baz']);
  });
});
