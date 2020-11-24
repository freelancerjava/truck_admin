import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from '../../../src/features/report';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Layout />);
  expect(renderedComponent.find('.report-layout').length).toBe(1);
});
