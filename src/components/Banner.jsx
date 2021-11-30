import React from 'react';
import Tickers from './Tickers.jsx';

import './Banner.scss';

const Banner = () => (
    <div className='Banner' >
      <Tickers symbols={['AMD', 'MSFT', 'AMZN', 'INTC', 'TSM', 'AAPL', 'FB', 'NFLX']} />
    </div>
);

export default Banner;
