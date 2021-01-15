import React from 'react';
import logo from './logo.svg';
import HooksCounter from './components/HooksCounter.js';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <HooksCounter/>
      </header>

    </div>
  );
}

export default App;
