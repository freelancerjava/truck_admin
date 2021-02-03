import React from 'react';
import { shallow } from 'enzyme';
import { Chat } from '../../../src/features/chats';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Chat />);
  expect(renderedComponent.find('.chats-chat').length).toBe(1);
});
