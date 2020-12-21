import React from 'react';
import { shallow } from 'enzyme';
import { ViewNav } from '../../../src/features/elements';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ViewNav />);
  expect(renderedComponent.find('.elements-view-nav').length).toBe(1);
});
