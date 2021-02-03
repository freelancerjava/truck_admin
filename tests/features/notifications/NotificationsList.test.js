import React from 'react';
import { shallow } from 'enzyme';
import { NotificationsList } from '../../../src/features/notifications';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<NotificationsList />);
  expect(renderedComponent.find('.notifications-notifications-list').length).toBe(1);
});
