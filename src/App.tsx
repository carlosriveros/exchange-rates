import React from 'react';
import FetchExchangeRatesButton from './containers/FetchExchangeRatesButton'
import ExchangeRatesTable from './containers/ExchangeRatesTable'
import 'antd/dist/antd.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      Exchange Rates
      </header>
      <FetchExchangeRatesButton message="Get Exchange Rate Information"/>
      <ExchangeRatesTable />
    </div>
  );
}

export default App;
