/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Nyhetsartikel from './Nyhetsartikel';


//Följande function "Nyhetslista" innehåller alla de artiklar som ska returneras på sidan, 
// de artiklar som finns i "Nyhetsartikel.js" filen hittas här.

function Nyhetslista(props) {
    return (
    <section>
        {props.minaArtiklar.map(function (item, index) {
           return <Nyhetsartikel
            minArtikel={item}
            key={`artikel${index}`} />

        })}
    </section>
    );
}

export default Nyhetslista;