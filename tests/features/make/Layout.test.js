import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from '../../../src/features/make';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Layout />);
  expect(renderedComponent.find('.make-layout').length).toBe(1);
});
