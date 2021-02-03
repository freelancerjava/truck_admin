import React from 'react';
import { shallow } from 'enzyme';
import { ViewUser } from '../../../src/features/users';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ViewUser />);
  expect(renderedComponent.find('.users-view-user').length).toBe(1);
});
