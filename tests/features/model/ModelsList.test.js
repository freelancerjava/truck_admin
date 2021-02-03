import React from 'react';
import { shallow } from 'enzyme';
import { ModelsList } from '../../../src/features/model';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ModelsList />);
  expect(renderedComponent.find('.model-models-list').length).toBe(1);
});
