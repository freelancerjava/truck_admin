import React from 'react';
import { shallow } from 'enzyme';
import { Status } from '../../../src/features/headers';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Status />);
  expect(renderedComponent.find('.headers-status').length).toBe(1);
});
