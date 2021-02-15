import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from '../../../src/features/park';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Layout />);
  expect(renderedComponent.find('.park-layout').length).toBe(1);
});
