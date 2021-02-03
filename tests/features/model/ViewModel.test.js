import React from 'react';
import { shallow } from 'enzyme';
import { ViewModel } from '../../../src/features/model';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ViewModel />);
  expect(renderedComponent.find('.model-view-model').length).toBe(1);
});
