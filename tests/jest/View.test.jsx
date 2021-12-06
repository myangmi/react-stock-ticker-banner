import React from 'react';
import { shallow } from 'enzyme';

import View from '../../src/components/View.jsx';

describe('View', () => {
  it('should render properly', () => {
    const wrapper = shallow(<View/>);

    expect(wrapper).toMatchSnapshot();
  });
});
