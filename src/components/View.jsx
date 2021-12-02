import React from 'react';
import PropTypes, { string } from 'prop-types';
import Banner from './Banner.jsx';

import './View.scss';

const propTypes = {
  Tickers: PropTypes.arrayOf(string),
};

const View = ({ Tickers }) => (
  <div className='View' >
    <Banner Tickers={Tickers} />
  </div>
);

View.propTypes = propTypes;
export default View;
