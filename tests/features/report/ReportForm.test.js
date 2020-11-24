import React from 'react';
import { shallow } from 'enzyme';
import { ReportForm } from '../../../src/features/report';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ReportForm />);
  expect(renderedComponent.find('.report-report-form').length).toBe(1);
});
