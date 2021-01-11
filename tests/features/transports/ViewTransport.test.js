import React from 'react';
import { shallow } from 'enzyme';
import { ViewTransport } from '../../../src/features/transports';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ViewTransport />);
  expect(renderedComponent.find('.transports-view-transport').length).toBe(1);
});
