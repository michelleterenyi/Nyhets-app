/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Nyhetslista from './Components/Nyhetslista';
import data from './fuskdata';

class App extends Component {
  render () {
    return (
      <Nyhetslista />
    );
  }
}

export default App;
