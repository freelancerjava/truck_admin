import React from 'react';
import { shallow } from 'enzyme';
import { NewUser } from '../../../src/features/users';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<NewUser />);
  expect(renderedComponent.find('.users-new-user').length).toBe(1);
});
