/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Nyhetslista from './Components/Nyhetslista';


// Constructor är det som hjälper till att skapa objektet, d.v.s "articles" som innehåller testartiklarna. "Props" 
// används för att de sedan ska skickas ner till andra komponenter, d.v.s till Nyhetslista.js och 
// nyhetsartikel.js där de behandlas. 
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
      

    componentDidMount() {
      fetch("https://newsapi.org/v2/top-headlines?country=se&apiKey=f8365b3bd0cb497aaffb9125d1a42e74").then( function(response) {
        // Behandlar den information som kommer tillbaka.

        if (response.status !== 200)  //Denna kod gör så att ett felmeddelande dyker upp i browsern om det skulle bli något fel med kopplingen.
        throw Error(`status: ${response.status}`);  

        return response.json()
      } ).then( jsondata => {
        // Gör något med Json objektet
        this.setState({ articles: jsondata.articles })
      }).catch(error =>{
        this.setState({
          articles: [{
          urlToImage: "fejk.jpg",
          title: "Något gick fel",
          description: `Något gick fel, ${error.message}`,
          // Skulle något gå fel på sidan så kommer felmeddelandet ovan att dyka upp.
        }]
      });

      })
    }

    
  render () {
    return (
      <div>

        <header className="header">
          <div>
            <h1 className="Huvudrubrik">Dagens Nyheter</h1>
            <p>Läs dagens nyheter här!</p>
          </div>
        </header>

        {/*Det som sker här är att props (innehållet i state, d.v.s artiklarna) skickas vidare till nästa komponent */}
      <Nyhetslista className="grid" minaArtiklar={this.state.articles}/>
     </div>

     
    )
     }

}

//Gör så att koden i filen exporteras för att sedan kunna importeras in i en annan komponent.

export default App;
