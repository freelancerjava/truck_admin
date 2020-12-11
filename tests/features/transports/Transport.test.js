import React from 'react';
import { shallow } from 'enzyme';
import { Transport } from '../../../src/features/transports';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Transport />);
  expect(renderedComponent.find('.transports-transport').length).toBe(1);
});
