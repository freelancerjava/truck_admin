import React from 'react';
import { shallow } from 'enzyme';
import { Order } from '../../../src/features/orders';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Order />);
  expect(renderedComponent.find('.orders-order').length).toBe(1);
});
