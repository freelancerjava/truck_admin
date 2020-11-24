import React from 'react';
import { shallow } from 'enzyme';
import { LogForm } from '../../../src/features/logs';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<LogForm />);
  expect(renderedComponent.find('.logs-log-form').length).toBe(1);
});
