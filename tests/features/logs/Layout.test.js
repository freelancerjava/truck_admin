import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from '../../../src/features/logs';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Layout />);
  expect(renderedComponent.find('.logs-layout').length).toBe(1);
});
