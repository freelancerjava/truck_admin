import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from '../../../src/features/partnerm';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Layout />);
  expect(renderedComponent.find('.partnerm-layout').length).toBe(1);
});
