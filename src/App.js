/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Nyhetslista from './Components/Nyhetslista';
import data from './fuskdata';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {articles: [
      
      {urlToImage:"https://www.idg.se/editorial/1200/path/1.719785.1559553565!imageUploader/3272512706.jpg"
    ,
    title:"Testnyhet 1",
    description:"Beskrivning av testnyheten",
    },
    
      {urlToImage:"https://www.idg.se/editorial/1200/path/1.719785.1559553565!imageUploader/3272512706.jpg"
    ,
    title:"Testnyhet 2",
    description:"Beskrivning av den andra testnyheten",
    }]};
  }
  render () {
    return (
      <Nyhetslista artikellista={this.state.articles}/>
    );
  }
}

export default App;
