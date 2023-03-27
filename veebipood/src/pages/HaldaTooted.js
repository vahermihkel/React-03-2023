import React, { useState } from 'react'
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
        <div key={ix}>
          {el} 
          <button onClick={() => kustuta(ix)}>x</button> 
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