/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

  
  //Props skickas vidare hit från förra komponenten. Detta för att funktionen "Nyhetsartikel" ska kunna ta upp den
  // information som behandlats i de resterande komponent filerna. Detta gör att alla kopplas samman.

function Nyhetsartikel(props) {
    return (
    <div className="grid">
      <article className="artiklarna">    
        <img src={props.minArtikel.urlToImage} className="Bilder"/>
        <h2 className="rubriker">{props.minArtikel.title}</h2>
        <p>{props.minArtikel.description}</p>

        {/* // Här ovan skapas upplägget för de separata artiklarna.  */}

      {/* Länk till artiklarna */}
        <a href={props.minArtikel.url} target="" className="link">Läs mer...</a>
      </article>
    </div>
    );
}


export default Nyhetsartikel;
