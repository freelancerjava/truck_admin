import React from 'react';
import { shallow } from 'enzyme';
import { NewPartner } from '../../../src/features/partnerm';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<NewPartner />);
  expect(renderedComponent.find('.partnerm-new-partner').length).toBe(1);
});
