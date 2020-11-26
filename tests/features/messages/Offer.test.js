import React from 'react';
import { shallow } from 'enzyme';
import { Offer } from '../../../src/features/messages';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<Offer />);
  expect(renderedComponent.find('.messages-offer').length).toBe(1);
});
