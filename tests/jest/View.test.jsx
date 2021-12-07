import React from 'react';
import { shallow } from 'enzyme';

import View from '../../src/components/View.jsx';
import mockTickers from '../mocks/mockTickers';

describe('View', () => {
  it('should render properly', () => {
    const wrapper = shallow(<View tickers={mockTickers} apiKey={'mockAPIKey'}/>);

    expect(wrapper).toMatchSnapshot();
  });
});
