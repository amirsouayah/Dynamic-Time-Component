import React, { Component } from 'react';
import Timer from './Timer.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
           <Timer />
        </div>
      </div>
    );
  }
}

export default App;
