import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          에디트 <code>src/App.js</code> 그리고 세이브 리로드.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          파파존스 개 존맛탱구리
        </a>
      </header>
    </div>
  );
}

export default App;
