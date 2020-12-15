import React from 'react';
import { shallow } from 'enzyme';
import { TransportsList } from '../../../src/features/transports';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<TransportsList />);
  expect(renderedComponent.find('.transports-transports-list').length).toBe(1);
});
