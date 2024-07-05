// src/App.js
import React from 'react';
import './App.css';
import Login from './components/login/login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Login App</h1>
        <Login />
      </header>
    </div>
  );
}

export default App;
