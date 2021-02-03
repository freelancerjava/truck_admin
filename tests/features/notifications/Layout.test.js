import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from '../../../src/features/notifications';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Layout />);
  expect(renderedComponent.find('.notifications-layout').length).toBe(1);
});
