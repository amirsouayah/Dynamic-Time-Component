import React, { Component } from 'react';

import './App.css';
import Add from './timer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
           {/* <Timer milliseconds={5000}/> */}
           <Add />
        </div>
      </div>
    ); 
  }
}

export default App;
