import React from 'react';
import { shallow } from 'enzyme';
import { ViewNotification } from '../../../src/features/notifications';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ViewNotification />);
  expect(renderedComponent.find('.notifications-view-notification').length).toBe(1);
});
