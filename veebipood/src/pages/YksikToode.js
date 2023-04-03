import React from 'react'
import { useParams } from 'react-router-dom' // HOOK - use algus, Reacti erikood
// useParams - võtta URL-st parameetreid on muutuvaid kohti
import tootedFailist from "../data/tooted.json";

function YksikToode() {
  const { jrkNr } = useParams(); // App.js sees path="toode/:jrkNr"   element={ <YksikToode /> }
  // useParams()
  // const leitud = ["Nobe", "Tesla", "BMW"][1]
  // kustutamine: ["Nobe", "Tesla", "BMW"].splice(1,1);
  const leitud = tootedFailist[jrkNr];

  return (
    <div>
      {leitud !== undefined && <div>
        <div>Toote nimetus: {leitud.nimi}</div>
        <div>Toote hind: {leitud.hind}</div>
        <div>Toode on järjekorras number: {Number(jrkNr) + 1}</div>
        {/* <div>Toote pilt on: .....</div> */}
        <img src={leitud.pilt} alt="" />
      </div>}
      {leitud === undefined && <div>Toodet ei leitud!</div>}
    </div>
  )
}

export default YksikToode