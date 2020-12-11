import React from 'react';
import { shallow } from 'enzyme';
import { NewTransport } from '../../../src/features/transports';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<NewTransport />);
  expect(renderedComponent.find('.transports-new-transport').length).toBe(1);
});
