import React from 'react';
import PropTypes, { string } from 'prop-types';
import View from './View.jsx';

import './Container.scss';

const mockTickers = ['AMD', 'MSFT', 'AMZN', 'INTC', 'TSM', 'AAPL', 'FB', 'NFLX'];

const propTypes = {
  tickers: PropTypes.arrayOf(string),
  apiKey: PropTypes.string,
};

const Container = ({ tickers, apiKey }) => (
  <div className='Container'>
    <View tickers={mockTickers} apiKey={apiKey} />
  </div>
);

Container.propTypes = propTypes;
export default Container;
