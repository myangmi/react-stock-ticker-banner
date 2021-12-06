import React from 'react';
import { shallow } from 'enzyme';

import Banner from '../../src/components/Banner.jsx';

describe('Banner', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Banner/>);

    expect(wrapper).toMatchSnapshot();
  });
});
