import React from 'react';
import { shallow } from 'enzyme';
import { Model } from '../../../src/features/model';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Model />);
  expect(renderedComponent.find('.model-model').length).toBe(1);
});
