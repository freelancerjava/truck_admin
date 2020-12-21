import React from 'react';
import { shallow } from 'enzyme';
import { UserInfoCard } from '../../../src/features/orders';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<UserInfoCard />);
  expect(renderedComponent.find('.orders-user-info-card').length).toBe(1);
});
