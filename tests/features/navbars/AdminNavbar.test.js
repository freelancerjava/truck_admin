import React from 'react';
import { shallow } from 'enzyme';
import { AdminNavbar } from '../../../src/features/navbars';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<AdminNavbar />);
  expect(renderedComponent.find('.navbars-admin-navbar').length).toBe(1);
});
