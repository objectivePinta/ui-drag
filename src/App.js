import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SpecialInputBox from './components/SpecialInputBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SpecialInputBox/>
        </header>
      </div>
    );
  }
}

export default App;
