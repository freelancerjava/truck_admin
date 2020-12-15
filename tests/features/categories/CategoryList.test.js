import React from 'react';
import { shallow } from 'enzyme';
import { CategoryList } from '../../../src/features/categories';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<CategoryList />);
  expect(renderedComponent.find('.categories-category-list').length).toBe(1);
});
