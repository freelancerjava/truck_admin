import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard } from '../../../src/features/orer';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Dashboard />);
  expect(renderedComponent.find('.orer-dashboard').length).toBe(1);
});
