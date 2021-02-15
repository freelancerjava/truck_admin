import React from 'react';
import { shallow } from 'enzyme';
import { PartnersList } from '../../../src/features/partnerm';

it('renders node with correct class name', () => {
  const renderedComponent = shallow(<PartnersList />);
  expect(renderedComponent.find('.partnerm-partners-list').length).toBe(1);
});
