import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Symfoni } from './hardhat/SymfoniContext';
import { CrowdstakeFactory } from './components/CrowdstakeFactory';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Symfoni autoInit={true}>
          <CrowdstakeFactory />
        </Symfoni>
      </header>
    </div>
  );
}

export default App;
