import React from 'react';
import { shallow } from 'enzyme';

import Container from '../../src/components/Container.jsx';
import mockTickers from '../mocks/mockTickers';

describe('Container', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Container tickers={mockTickers} apiKey={'mockAPIKey'}/>);

    expect(wrapper).toMatchSnapshot();
  });
});
