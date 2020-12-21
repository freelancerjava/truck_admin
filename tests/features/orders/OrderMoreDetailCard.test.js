import React from 'react';
import { shallow } from 'enzyme';
import { OrderMoreDetailCard } from '../../../src/features/orders';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<OrderMoreDetailCard />);
  expect(renderedComponent.find('.orders-order-more-detail-card').length).toBe(1);
});
