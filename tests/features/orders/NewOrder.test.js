import React from 'react';
import { shallow } from 'enzyme';
import { NewOrder } from '../../../src/features/orders';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<NewOrder />);
  expect(renderedComponent.find('.orders-new-order').length).toBe(1);
});
