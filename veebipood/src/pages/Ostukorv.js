import React, { useState } from "react";
import { Link } from "react-router-dom";
import ostukorvFailist from "../data/ostukorv.json";

function Ostukorv() {                       
  const [ostukorv, uuendaOstukorv] = useState(ostukorvFailist);

  const tyhjenda = () => {
    ostukorvFailist = []; // annan faili tühja array, kus pole midagi sees
    uuendaOstukorv([]); // uuendan HTMLs tühja array vastu
    // uuendaOstukorv(ostukorvFailist);
  }

  const lisa = (klikitudToode) => {
    // ostukorv.push("Red bull", "Dynamiit", "Monster");
    // ostukorv.push("Red bull");
    // ostukorv.push("Dynamiit");
    // ostukorv.push("Monster");
    ostukorv.push(klikitudToode);
    uuendaOstukorv(ostukorv.slice());
  }

  const kustuta = (jarjekorranumber) => { // järjekorranumber on JavaScriptis 0-ga algav    
    ostukorv.splice(jarjekorranumber,1); // vasakpoolne number tähendab mitmendat ma kustutan, parempoolne mitu tükki ma kustutan
    uuendaOstukorv(ostukorv.slice());
  }

  const arvutaKogusumma = () => {
    let summa = 0;
    ostukorv.forEach(toode => summa = summa + toode.hind);
    return summa;
  }

  return (
    <div>
      {/* vasakul pool pean ütlema mis tingimustel ON NÄHTAV, kui on tõsi, siis on nähtav */}
      { ostukorv.length > 0 && <button onClick={tyhjenda}>Tühjenda</button> }
      { ostukorv.length > 0 && <div>Ostukorvis esemeid kokku: {ostukorv.length} tk</div> }
      {ostukorv.map((toode, jrkNr) => 
        <div key={jrkNr}>
          <img className="pilt" src={toode.pilt} alt="" />
          <div>{toode.nimi}</div>
          <div>{toode.hind}</div>
          <button onClick={() => lisa(toode)}>+</button>
          <button onClick={() => kustuta(jrkNr)}>x</button>
        </div>
      )}
      { ostukorv.length === 0 && <div>Ostukorv on tühi. <Link to="/"> Tooteid lisama. </Link></div>}
      <div>Kokku: {arvutaKogusumma()} €</div>
    </div>
  );
}

export default Ostukorv;

// varasemad projektid   Youtubest / Udemyst
// varasemad tööprojektid
// OpenAI
// googledamised

// ise välja mõtlemine xxxxxxx

// 29.03 -- lõpetame 20.00
// 03.04 -- 17.15 - 20.40   19.00-19.10
// 05.04 -- 17.15 - 20.40   19.00-19.10
// 10.04 -- 17.15 - 20.40   19.00-19.10
// 12.04 -- 17.15 - 20.40   19.00-19.10