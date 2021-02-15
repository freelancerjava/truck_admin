import React from 'react';
import { shallow } from 'enzyme';
import { ViewPartner } from '../../../src/features/partnerm';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ViewPartner />);
  expect(renderedComponent.find('.partnerm-view-partner').length).toBe(1);
});
