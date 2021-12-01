import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tickers from './Tickers.jsx';

import './Banner.scss';

const mockSymbols = ['AMD', 'MSFT', 'AMZN', 'INTC', 'TSM', 'AAPL', 'FB', 'NFLX']; // TODO: Implement dynamics symbol selection

const Banner = () => {
  const [quoteData, setQuoteData] = useState(mockSymbols);

  useEffect(() => {
    axios.get(
      `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${mockSymbols}&token=Tpk_87a7db1434064012a5134a13fac6355d&types=price`,
    ).then(
      (res) => {
        setQuoteData(res.data);
      },
    ).catch((err) => {
      console.log(err);
    });
  }, []);

  return (
    <div className='Banner' >
      <Tickers symbols={quoteData} />
    </div>
  );
};

export default Banner;
