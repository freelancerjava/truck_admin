import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from '../../../src/features/transports';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Layout />);
  expect(renderedComponent.find('.transports-layout').length).toBe(1);
});
