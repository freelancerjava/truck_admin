import React from 'react';
import { shallow } from 'enzyme';
import { NewModel } from '../../../src/features/model';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<NewModel />);
  expect(renderedComponent.find('.model-new-model').length).toBe(1);
});
