import React, { Component } from 'react';
import './App.css';
import twitterLogo from './Twitter_Social_Icon_Circle_Color.svg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Main-container">
          <div className="Twitter-info">
            <img src={twitterLogo} className="Twitter-logo" alt="twitterlogo" />
            <a href="https://www.twitter.com/veganpluspizza">VeganPlusPizza</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
