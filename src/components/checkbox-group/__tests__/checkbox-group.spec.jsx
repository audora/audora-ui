import React from 'react';
import { shallow } from 'enzyme';
import CheckboxGroup from '../checkbox-group';
import Checkbox from '../../checkbox';

describe('CheckboxGroup', () => {
  it('renders correctly', () => {
    const wrapper = shallow((
      <CheckboxGroup>
        <Checkbox className="cb" label="Checkbox 1" name="checkbox1" value="checkbox1" />
        <Checkbox className="cb" label="Checkbox 2" name="checkbox2" value="checkbox2" />
        <Checkbox className="cb" label="Checkbox 3" name="checkbox3" value="checkbox3" />
      </CheckboxGroup>
    ));

    const texts = wrapper.find('.cb').map(node => node.props().name);
    expect(texts).toEqual(['checkbox1', 'checkbox2', 'checkbox3']);
  });
});
