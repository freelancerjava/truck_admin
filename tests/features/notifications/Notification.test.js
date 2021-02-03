import React from 'react';
import { shallow } from 'enzyme';
import { Notification } from '../../../src/features/notifications';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Notification />);
  expect(renderedComponent.find('.notifications-notification').length).toBe(1);
});
