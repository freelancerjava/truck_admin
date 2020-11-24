import React from 'react';
import { shallow } from 'enzyme';
import { MapBrowser } from '../../../src/features/map';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<MapBrowser />);
  expect(renderedComponent.find('.map-map').length).toBe(1);
});
