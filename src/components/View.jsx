import React from 'react';
import PropTypes, { string } from 'prop-types';
import Banner from './Banner.jsx';

import './View.scss';

const propTypes = {
  tickers: PropTypes.arrayOf(string).isRequired,
  apiKey: PropTypes.string,
};

const View = ({ tickers, apiKey }) => (
  <div className='View' >
    <Banner tickers={tickers} apiKey={apiKey} />
  </div>
);

View.propTypes = propTypes;
export default View;
