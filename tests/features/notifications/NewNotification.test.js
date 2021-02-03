import React from 'react';
import { shallow } from 'enzyme';
import { NewNotification } from '../../../src/features/notifications';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<NewNotification />);
  expect(renderedComponent.find('.notifications-new-notification').length).toBe(1);
});
