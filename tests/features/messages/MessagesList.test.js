import React from 'react';
import { shallow } from 'enzyme';
import { MessagesList } from '../../../src/features/messages';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<MessagesList />);
  expect(renderedComponent.find('.messages-messages-list').length).toBe(1);
});
