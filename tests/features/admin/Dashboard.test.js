import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard } from '../../../src/features/admin';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Dashboard />);
  expect(renderedComponent.find('.admin-dashboard').length).toBe(1);
});
