import React from 'react';
import { shallow } from 'enzyme';
import { LogItem } from '../../../src/features/logs';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<LogItem />);
  expect(renderedComponent.find('.logs-log-item').length).toBe(1);
});
