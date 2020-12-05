import React from 'react';
import { shallow } from 'enzyme';
import { NewCategory } from '../../../src/features/categories';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<NewCategory />);
  expect(renderedComponent.find('.categories-new-category').length).toBe(1);
});
