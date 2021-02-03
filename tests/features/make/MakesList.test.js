import React from 'react';
import { shallow } from 'enzyme';
import { MakesList } from '../../../src/features/make';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<MakesList />);
  expect(renderedComponent.find('.make-makes-list').length).toBe(1);
});
