import React from 'react';
import { shallow } from 'enzyme';
import { Review } from '../../../src/features/messages';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Review />);
  expect(renderedComponent.find('.messages-review').length).toBe(1);
});
