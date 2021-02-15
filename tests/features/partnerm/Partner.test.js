import React from 'react';
import { shallow } from 'enzyme';
import { Partner } from '../../../src/features/partnerm';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Partner />);
  expect(renderedComponent.find('.partnerm-partner').length).toBe(1);
});
