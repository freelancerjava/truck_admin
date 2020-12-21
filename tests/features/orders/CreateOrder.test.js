import React from 'react';
import { shallow } from 'enzyme';
import { CreateOrder } from '../../../src/features/orders';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<CreateOrder />);
  expect(renderedComponent.find('.orders-create-order').length).toBe(1);
});
