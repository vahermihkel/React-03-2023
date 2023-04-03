import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import tootedFailist from "../data/tooted.json";

function HaldaTooted() {
  const [tooted, uuendaTooted] = useState(tootedFailist);

  const kustuta = (index) => {
    tootedFailist.splice(index,1);
    uuendaTooted(tootedFailist.slice());
  }

  return (
    <div>
      <div>Tooteid kokku: {tooted.length} tk</div>
      {tooted.map((el, ix) => 
        <div className={ el.aktiivne === true ? "aktiivne-toode" : "mitteaktiivne-toode" } key={ix}>
          <img className="pilt" src={el.pilt} alt="" />
          <div>{el.nimi}</div>
          <div>{el.hind}</div>
          <div>{el.pilt}</div>
          <div>{el.aktiivne + 0}</div>
          <button onClick={() => kustuta(ix)}>x</button> 
          <Link to={"/muuda/" + ix}>
            <button>Muuda</button>
          </Link>
        </div> )}
    </div>
  )
}

export default HaldaTooted

// väikekaupmees 2000-3000 -> võtame malli, muudame paar asja
// CMS:  Drupal, Wordpress/Woocommerce, Joomla  1-2 nädalat

// kõikidelt pankadelt kodulaenu tingimused, hakkaks ühel lehel näitama
// 30-50 000 React.js, Next.js/Drupal   0.5a aastat

// Riik, Arvutitark.ee 2 aastat Reactis, Digilugu.ee 5 aastat
// miljonitest