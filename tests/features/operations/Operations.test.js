import React from 'react';
import { shallow } from 'enzyme';
import { Operations } from '../../../src/features/operations';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Operations />);
  expect(renderedComponent.find('.operations-operations').length).toBe(1);
});
