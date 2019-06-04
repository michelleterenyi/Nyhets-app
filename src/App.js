/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Nyhetslista from './Components/Nyhetslista';


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
          <div classname="Rubrik">
            <h1>Dagens Nyheter!</h1>
          </div>
        )
      }

    componentDidMount() {
      fetch("https://newsapi.org/v2/top-headlines?country=se&apiKey=f8365b3bd0cb497aaffb9125d1a42e74").then( function(response) {
        // Behandlar den information som kommer tillbaka.
        return response.json()
      } ).then( jsondata => {
        // Gör något med Json objektet
        this.setState({ articles: jsondata.articles })
      }).catch(error =>{
        this.setState({
          articles: [{
          urlToImage: "fejk.jpg",
          title: "Något gick fel",
          description: "Du verkar tappat anslutningen till internet."
        }]
      });

      })
    }

  render () {
    return (
      <Nyhetslista minaArtiklar={this.state.articles}/>
    );
  }
}

export default App;
