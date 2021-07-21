
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Navigation, Main } from './components';

class App extends Component {


  render() {
    return (
      <div >
        <h1>Indra</h1>
        <Navigation />
        <Main />
      </div>
    );
  }
}

export default App;




