import React from 'react';
import { shallow } from 'enzyme';
import { LogRowHead } from '../../../src/features/logs';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<LogRowHead />);
  expect(renderedComponent.find('.logs-log-row-head').length).toBe(1);
});
