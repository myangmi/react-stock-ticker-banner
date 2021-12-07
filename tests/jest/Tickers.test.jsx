import React from 'react';
import { shallow } from 'enzyme';

import Tickers from '../../src/components/Tickers.jsx';
import mockBatchIEX from '../mocks/mockBatchIEX.json';

describe('Tickers', () => {
  it('should render properly', () => {
    const wrapper = shallow(<Tickers />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render mocked data properly', () => {
    const wrapper = shallow(<Tickers quoteData={mockBatchIEX}/>);

    expect(wrapper.find('li').at('0').text()).toEqual('AMD: $150.48');
    expect(wrapper.find('li').at('1').text()).toEqual('MSFT: $327.77');
    expect(wrapper.find('li').at('2').text()).toEqual('AMZN: $3461.5');
    expect(wrapper.find('li').at('3').text()).toEqual('INTC: $49.27');
    expect(wrapper.find('li').at('4').text()).toEqual('TSM: $121.35');
    expect(wrapper.find('li').at('5').text()).toEqual('AAPL: $169.51');
    expect(wrapper.find('li').at('6').text()).toEqual('FB: $307.57');
    expect(wrapper.find('li').at('7').text()).toEqual('NFLX: $613.96');

    expect(wrapper).toMatchSnapshot();
  });
});
