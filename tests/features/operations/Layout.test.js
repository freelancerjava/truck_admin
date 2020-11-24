import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from '../../../src/features/operations';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Layout />);
  expect(renderedComponent.find('.operations-layout').length).toBe(1);
});
