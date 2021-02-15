import React from 'react';
import { shallow } from 'enzyme';
import { NewPark } from '../../../src/features/park';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<NewPark />);
  expect(renderedComponent.find('.park-new-park').length).toBe(1);
});
