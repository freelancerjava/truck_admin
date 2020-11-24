import React from 'react';
import { shallow } from 'enzyme';
import { LogRow } from '../../../src/features/logs';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<LogRow />);
  expect(renderedComponent.find('.logs-log-row').length).toBe(1);
});
