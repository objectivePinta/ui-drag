import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';
import SpecialInputBox from './components/SpecialInputBox';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
        <header className="App-header">
          <SpecialInputBox/>
        </header>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
