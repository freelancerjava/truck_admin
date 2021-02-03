import React from 'react';
import { shallow } from 'enzyme';
import { ViewChat } from '../../../src/features/chats';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ViewChat />);
  expect(renderedComponent.find('.chats-view-chat').length).toBe(1);
});
