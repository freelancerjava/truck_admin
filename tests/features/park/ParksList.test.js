import React from 'react';
import { shallow } from 'enzyme';
import { ParksList } from '../../../src/features/park';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ParksList />);
  expect(renderedComponent.find('.park-parks-list').length).toBe(1);
});
