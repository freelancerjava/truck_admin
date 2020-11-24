import React from 'react';
import { shallow } from 'enzyme';
import { Records } from '../../../src/features/records';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Records />);
  expect(renderedComponent.find('.records-records').length).toBe(1);
});
