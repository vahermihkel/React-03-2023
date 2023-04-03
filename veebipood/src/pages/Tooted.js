import React, { useState } from 'react'
import { Link } from 'react-router-dom';
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

  const sorteeriAZ = () => {
    tooted.sort((a,b) => a.nimi.localeCompare(b.nimi));
    uuendaTooted(tooted.slice());
  }

  const sorteeriZA = () => {
    tooted.sort((a,b) => b.nimi.localeCompare(a.nimi));
    uuendaTooted(tooted.slice());
  }

  const sorteeriHindKasv = () => {
    tooted.sort((a,b) => a.hind - b.hind);
    uuendaTooted(tooted.slice());
  }

  const sorteeriHindKah = () => {
    tooted.sort((a,b) => b.hind - a.hind);
    uuendaTooted(tooted.slice());
  }

  const filtreeriEsitaheAlusel = (esiTaht) => {
    const vastus = tootedFailist.filter(yksToode => yksToode.nimi.startsWith(esiTaht));
    uuendaTooted(vastus);
  }

  return (
    <div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriHindKasv}>Sorteeri hind kasvavalt</button>
      <button onClick={sorteeriHindKah}>Sorteeri hind kahanevalt</button>
      <br /><br />
      <button onClick={() => filtreeriEsitaheAlusel("B")}>B</button>
      <button onClick={() => filtreeriEsitaheAlusel("N")}>N</button>
      <button onClick={() => filtreeriEsitaheAlusel("T")}>T</button>
      <div>Tooteid kokku: {tooted.length} tk</div>
      {tooted.map((el, ix) => 
        <div key={ix}>
          <Link to={"/toode/" + ix}>
            {/* {el} */}
            <img className="pilt" src={el.pilt} alt="" />
            <div>{el.nimi}</div>
            <div>{el.hind}</div>
            {/* <div>{el.aktiivne}</div> */}
          </Link>
          <button onClick={() => lisaOstukorvi(el)}>Lisa ostukorvi</button> 
        </div> )}
    </div>
  )
}

export default Tooted