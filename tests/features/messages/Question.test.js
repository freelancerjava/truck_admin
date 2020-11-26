import React from 'react';
import { shallow } from 'enzyme';
import { Question } from '../../../src/features/messages';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Question />);
  expect(renderedComponent.find('.messages-question').length).toBe(1);
});
