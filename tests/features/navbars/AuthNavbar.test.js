import React from 'react';
import { shallow } from 'enzyme';
import { AuthNavbar } from '../../../src/features/navbars';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<AuthNavbar />);
  expect(renderedComponent.find('.navbars-auth-navbar').length).toBe(1);
});
