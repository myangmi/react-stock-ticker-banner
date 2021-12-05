import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Tickers from './Tickers.jsx';

import './Banner.scss';

const mockSymbols = ['AMD', 'MSFT', 'AMZN', 'INTC', 'TSM', 'AAPL', 'FB', 'NFLX']; // TODO: Implement dynamics symbol selection

const Banner = () => {
  const [quoteData, setQuoteData] = useState({
    AMD: {
      price: 150.48,
    },
    MSFT: {
      price: 327.77,
    },
    AMZN: {
      price: 3461.5,
    },
    INTC: {
      price: 49.27,
    },
    TSM: {
      price: 121.35,
    },
    AAPL: {
      price: 169.51,
    },
    FB: {
      price: 307.57,
    },
    NFLX: {
      price: 613.96,
    },
  });

  useEffect(() => {
    axios.get(
      `https://sandbox.iexapis.com/stable/stock/market/batch?symbols=${mockSymbols}&token=Tpk_f4c74570f4f44b0facf47abd0ba3ae4c&types=price`,
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
      <Tickers quoteData={quoteData} />
    </div>
  );
};

export default Banner;
