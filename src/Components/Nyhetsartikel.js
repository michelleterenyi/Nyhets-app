/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

  

function Nyhetsartikel(props) {
    return (
    <div className="grid">
      <article>
        <img src={props.minArtikel.urlToImage} className="Bilder"/>
        <h2 className="rubriker">{props.minArtikel.title}</h2>
        <p>{props.minArtikel.description}</p>

      {/* Länk till artiklarna */}
        <a href={props.minArtikel.url} target="" className="link">Läs mer...</a>
      </article>
    </div>
    );
}


export default Nyhetsartikel;
