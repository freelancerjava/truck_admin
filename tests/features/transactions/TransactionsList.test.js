import React from 'react';
import { shallow } from 'enzyme';
import { TransactionsList } from '../../../src/features/transactions';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<TransactionsList />);
  expect(renderedComponent.find('.transactions-transactions-list').length).toBe(1);
});
