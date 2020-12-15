import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from '../../../src/features/auth';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Layout />);
  expect(renderedComponent.find('.auth-layout').length).toBe(1);
});
