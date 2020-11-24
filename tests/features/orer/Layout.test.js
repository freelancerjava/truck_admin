import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from '../../../src/features/orer';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Layout />);
  expect(renderedComponent.find('.orer-layout').length).toBe(1);
});
