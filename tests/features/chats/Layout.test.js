import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from '../../../src/features/chats';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Layout />);
  expect(renderedComponent.find('.chats-layout').length).toBe(1);
});
