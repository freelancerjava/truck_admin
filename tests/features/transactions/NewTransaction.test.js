import React from 'react';
import { shallow } from 'enzyme';
import { NewTransaction } from '../../../src/features/transactions';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<NewTransaction />);
  expect(renderedComponent.find('.transactions-new-transaction').length).toBe(1);
});
