import React from 'react';
import { shallow } from 'enzyme';
import { ViewMake } from '../../../src/features/make';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<ViewMake />);
  expect(renderedComponent.find('.make-view-make').length).toBe(1);
});
