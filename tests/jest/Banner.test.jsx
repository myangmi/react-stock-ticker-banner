import React from 'react';
import { shallow, mount } from 'enzyme';

import Banner from '../../src/components/Banner.jsx';
import mockTickers from '../mocks/mockTickers';

describe('Banner', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Banner tickers={mockTickers} apiKey={'mockAPIKey'}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('should set apiKey prop to default sandbox key if apiKey is not present', () => {
    const wrapper = mount(<Banner tickers={mockTickers} />);

    expect(wrapper.prop('apiKey')).toEqual('Tpk_f4c74570f4f44b0facf47abd0ba3ae4c');
  });
});
