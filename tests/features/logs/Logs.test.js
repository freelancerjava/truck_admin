import React from 'react';
import { shallow } from 'enzyme';
import { Logs } from '../../../src/features/logs';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Logs />);
  expect(renderedComponent.find('.logs-logs').length).toBe(1);
});
