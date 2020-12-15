import React from 'react';
import { shallow } from 'enzyme';
import { UserList } from '../../../src/features/users';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<UserList />);
  expect(renderedComponent.find('.users-user-list').length).toBe(1);
});
