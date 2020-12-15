import React from 'react';
import { shallow } from 'enzyme';
import { User } from '../../../src/features/users';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<User />);
  expect(renderedComponent.find('.users-user').length).toBe(1);
});
