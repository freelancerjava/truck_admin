import React from 'react';
import { shallow } from 'enzyme';
import { Complaint } from '../../../src/features/messages';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Complaint />);
  expect(renderedComponent.find('.messages-complaint').length).toBe(1);
});
