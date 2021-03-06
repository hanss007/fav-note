import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const MyButton = styled.button`
  border: 2px solid blue;
  padding: 50px;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
