import React, { useEffect, useState } from 'react';
import PropTypes, { string } from 'prop-types';
import axios from 'axios';
import Tickers from './Tickers.jsx';

import './Banner.scss';

const propTypes = {
  tickers: PropTypes.arrayOf(string).isRequired,
  apiKey: PropTypes.string,
};

const defaultProps = {
  apiKey: 'Tpk_f4c74570f4f44b0facf47abd0ba3ae4c', // TODO: Remove personal Sandbox Token
};

const Banner = ({ tickers, apiKey }) => {
  const [quoteData, setQuoteData] = useState({});
  const apiPrefix = (apiKey[0] === 'T') ? 'https://sandbox.iexapis.com' : 'https://cloud.iexapis.com';

  useEffect(() => {
    axios.get(
      `${apiPrefix}/stable/stock/market/batch?symbols=${tickers}&token=${apiKey}&types=price`,
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

Banner.defaultProps = defaultProps;
Banner.propTypes = propTypes;
export default Banner;
