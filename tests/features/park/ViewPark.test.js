import React from 'react';
import { shallow } from 'enzyme';
import { ViewPark } from '../../../src/features/park';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ViewPark />);
  expect(renderedComponent.find('.park-view-park').length).toBe(1);
});
