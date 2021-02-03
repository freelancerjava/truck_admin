import React from 'react';
import { shallow } from 'enzyme';
import { Transaction } from '../../../src/features/transactions';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Transaction />);
  expect(renderedComponent.find('.transactions-transaction').length).toBe(1);
});
