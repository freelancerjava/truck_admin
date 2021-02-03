import React from 'react';
import { shallow } from 'enzyme';
import { Make } from '../../../src/features/make';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Make />);
  expect(renderedComponent.find('.make-make').length).toBe(1);
});
