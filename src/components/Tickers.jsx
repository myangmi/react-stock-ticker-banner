/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes, { string } from 'prop-types';
import axios from 'axios';

import './Tickers.scss';

const propTypes = {
  symbols: PropTypes.arrayOf(string).isRequired,
};

const Tickers = ({ symbols }) => {
  // TODO: Find better API
  const getQuotes = (symbol) => {
    // axios.get(
    //   `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=2LG1M918AHBXRKAW`,
    // ).then((res) => {
    //   const latest = res.data['Meta Data']['3. Last Refreshed'];
    //   console.log(res.data['Time Series (Daily)'][latest]['4. close']);
    //   return res.data['Time Series (Daily)'][latest]['4. close'];
    // }).catch((err) => {
    //   console.log(err);
    //   return '25';
    // });

    return 'placeholder';
  };

  const content = (
    <>
      <ul className='Tickers'>
        {symbols.map((ticker, i) => (<li key={i}>{ticker}: ${`${getQuotes(ticker)}`}</li>))}
        {symbols.map((ticker, i) => (<li key={i}>{ticker}: ${`${getQuotes(ticker)}`}</li>))}
      </ul>
    </>
  );

  return (
    content
  );
};

Tickers.propTypes = propTypes;

export default Tickers;
