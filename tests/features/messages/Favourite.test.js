import React from 'react';
import { shallow } from 'enzyme';
import { Favourite } from '../../../src/features/messages';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Favourite />);
  expect(renderedComponent.find('.messages-favourite').length).toBe(1);
});
