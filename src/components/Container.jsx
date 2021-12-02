import React from 'react';
import PropTypes, { string } from 'prop-types';
import View from './View.jsx';

import './Container.scss';

const propTypes = {
  Tickers: PropTypes.arrayOf(string),
};

const Container = ({ Tickers }) => (
  <div className='Container' >
    <View Tickers={Tickers} />
  </div>
);

Container.propTypes = propTypes;
export default Container;
