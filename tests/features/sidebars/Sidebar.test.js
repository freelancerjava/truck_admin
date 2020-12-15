import React from 'react';
import { shallow } from 'enzyme';
import { Sidebar } from '../../../src/features/sidebars';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Sidebar />);
  expect(renderedComponent.find('.sidebars-sidebar').length).toBe(1);
});
