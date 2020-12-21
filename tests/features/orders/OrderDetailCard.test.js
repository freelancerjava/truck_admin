import React from 'react';
import { shallow } from 'enzyme';
import { OrderDetailCard } from '../../../src/features/orders';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<OrderDetailCard />);
  expect(renderedComponent.find('.orders-order-detail-card').length).toBe(1);
});
