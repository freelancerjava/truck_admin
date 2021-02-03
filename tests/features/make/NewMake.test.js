import React from 'react';
import { shallow } from 'enzyme';
import { NewMake } from '../../../src/features/make';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<NewMake />);
  expect(renderedComponent.find('.make-new-make').length).toBe(1);
});
