import React from 'react';
import { shallow } from 'enzyme';
import { OrdersList } from '../../../src/features/orders';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<OrdersList />);
  expect(renderedComponent.find('.orders-orders-list').length).toBe(1);
});
