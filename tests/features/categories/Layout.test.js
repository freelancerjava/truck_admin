import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from '../../../src/features/categories';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Layout />);
  expect(renderedComponent.find('.categories-layout').length).toBe(1);
});
