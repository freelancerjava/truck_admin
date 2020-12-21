import React from 'react';
import { shallow } from 'enzyme';
import { Gallery } from '../../../src/features/elements';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Gallery />);
  expect(renderedComponent.find('.elements-gallery').length).toBe(1);
});
