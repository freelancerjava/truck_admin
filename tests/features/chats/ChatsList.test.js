import React from 'react';
import { shallow } from 'enzyme';
import { ChatsList } from '../../../src/features/chats';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ChatsList />);
  expect(renderedComponent.find('.chats-chats-list').length).toBe(1);
});
