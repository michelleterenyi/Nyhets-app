/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Nyhetsartikel from './Nyhetsartikel';



//Artiklarna har skickats ner hit från filen "app.js" som en del av props och här behandlas den.

function Nyhetslista(props) {
    return (
    <section>
        {props.minaArtiklar.map(function (item, index) {
           return <Nyhetsartikel
            minArtikel={item}
            key={`artikel${index}`} />   //Då det finns flera artiklar så måste de ha något som skiljer dem åt, därför bildas "key".
        
            //Följande funktion "Nyhetslista" innehåller alla de artiklar som ska returneras till websidan, 
        // d.v.s de artiklar som finns i "Nyhetsartikel.js" filen, hittas här samlade.
        })}
    </section>
    );
}

export default Nyhetslista;