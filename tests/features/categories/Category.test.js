import React from 'react';
import { shallow } from 'enzyme';
import { Category } from '../../../src/features/categories';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Category />);
  expect(renderedComponent.find('.categories-category').length).toBe(1);
});
