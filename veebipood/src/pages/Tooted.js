import React, { useState } from 'react'
import ostukorvFailist from "../data/ostukorv.json";
import tootedFailist from "../data/tooted.json";

// 4 võimalust panna faile suhtlema:
// 1. localStorage.setItem ---> localStorage.getItem
// 2. tõstame loogika .json faili ja paneme mõlemad lehed seda faili kasutama
// 3. andmebaas ---> teeme inglise keelses projektis
// 4. useContext ---> teeme kõige lõpus

function Tooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist);

  const lisaOstukorvi = (klikitudToode) => {
    ostukorvFailist.push(klikitudToode);
  }

  return (
    <div>
      <div>Tooteid kokku: {tooted.length} tk</div>
      {tooted.map((el, ix) => 
        <div key={ix}>
          {el} 
          <button onClick={() => lisaOstukorvi(el)}>Lisa ostukorvi</button> 
        </div> )}
    </div>
  )
}

export default Tooted