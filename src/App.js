import React from 'react';
import HooksCounter from './components/HooksCounter.js';
import FetchingData from './components/FetchingData.js';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <HooksCounter/>
        <FetchingData/>
      </header>

    </div>
  );
}

export default App;
