import React from 'react';
import { shallow } from 'enzyme';
import { ViewOrder } from '../../../src/features/orders';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ViewOrder />);
  expect(renderedComponent.find('.orders-view-order').length).toBe(1);
});
