import React from 'react';
import PropTypes from 'prop-types';

import './Tickers.scss';

const propTypes = {
  quoteData: PropTypes.object,
};

const Tickers = ({ quoteData }) => {
  const content = (
    <>
      <ul className='Tickers'>
        {
          Object.keys(quoteData).map((ticker, i) => (
            <li key={i}>{`${ticker}`}: ${`${quoteData[ticker].price}`}</li>
          ))
        }
        {
          Object.keys(quoteData).map((ticker, i) => (
            <li key={i}>{`${ticker}`}:  ${`${quoteData[ticker].price}`}</li>
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
