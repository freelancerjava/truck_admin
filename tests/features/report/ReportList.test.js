import React from 'react';
import { shallow } from 'enzyme';
import { ReportList } from '../../../src/features/report';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ReportList />);
  expect(renderedComponent.find('.report-report-list').length).toBe(1);
});
