import React from 'react';
import { shallow } from 'enzyme';
import { Autoreply } from '../../../src/features/messages';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Autoreply />);
  expect(renderedComponent.find('.messages-autoreply').length).toBe(1);
});
