/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes, { string } from 'prop-types';

import './Tickers.scss';

const propTypes = {
  quoteData: PropTypes.arrayOf(string),
};

const Tickers = ({ symbols }) => {
  const content = (
    <>
      <ul className='Tickers'>
        {
          Object.keys(symbols).map((ticker, i) => (
            <li key={i}>{`${ticker}`}: ${`${symbols[ticker].price}`}</li>
          ))
        }
        {
          Object.keys(symbols).map((ticker, i) => (
            <li key={i}>{`${ticker}`}:  ${`${symbols[ticker].price}`}</li>
          ))
        }
      </ul>
    </>
  );

  return (
    content
  );
};

Tickers.propTypes = propTypes;

export default Tickers;
