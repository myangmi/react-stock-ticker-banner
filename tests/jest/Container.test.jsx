import React from 'react';
import { shallow } from 'enzyme';

import Container from '../../src/components/Container.jsx';

describe('Container', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Container/>);

    expect(wrapper).toMatchSnapshot();
  });
});
