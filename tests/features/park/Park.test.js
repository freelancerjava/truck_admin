import React from 'react';
import { shallow } from 'enzyme';
import { Park } from '../../../src/features/park';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Park />);
  expect(renderedComponent.find('.park-park').length).toBe(1);
});
