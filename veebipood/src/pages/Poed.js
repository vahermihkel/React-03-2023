import React, { useState } from 'react'
import poedFailist from "../data/poed.json";

function Poed() { // array   list
  // massiiv, väärtuse kogum
  const [poed, uuendaPoed] = useState(poedFailist);

  const tagasiOriginaali = () => {
    uuendaPoed(poedFailist);
  }

  const sorteeriAZ = () => {
    poed.sort(); // default sorteerimine: A-Z
    // poed.sort((a,b) => a.localeCompare(b));
    uuendaPoed(poed.slice()); // kustutab mälukoha
  }

  const sorteeriZA = () => {
    poed.sort((a,b) => b.localeCompare(a)); // mittedefault sorteerimine:  (a,b) => TINGIMUST mille alusel sort
    uuendaPoed(poed.slice()); // kustutab mälukoha
  }

  const sorteeriTahedKasv = () => {
// a - Ülemiste    8  -  6   ---> järjekorda kas tuleb positiivne arv või negatiivne
// b - Viimsi     6  -  11
    poed.sort((a,b) => a.length - b.length); 
    uuendaPoed(poed.slice());
  }

  const sorteeriTahedKah = () => {
    poed.sort((a,b) => b.length - a.length); 
    uuendaPoed(poed.slice());
  }

  const sorteeriKolmasTaht = () => {
    poed.sort((a,b) => a[2].localeCompare(b[2])); 
    uuendaPoed(poed.slice());
  }

  const filtreeriELopus = () => {
    const tulem = poed.filter(element => element.endsWith("e"));
    uuendaPoed(tulem);
  }

  const filtreeriKellel9Tahte = () => {
    const tulem = poed.filter(element => element.length === 9);
    uuendaPoed(tulem);
  }

  const filtreeriKellelVah7Tahte = () => {
    const tulem = poed.filter(element => element.length > 7);
    uuendaPoed(tulem);
  }

  const filtreeriSisaldabTaheLyhenditIs = () => {
    const tulem = poed.filter(element => element.includes("is"));
    uuendaPoed(tulem);
  }

  const filtreeriKolmasTahtI = () => {
    const tulem = poed.filter(element => element[2] === "i");
    uuendaPoed(tulem);
  }

  const muudaKoikSuureks = () => {
    const vastus = poed.map(yksPood => yksPood.toUpperCase());
    uuendaPoed(vastus);
  }

  const muudaKoikVaikseks = () => {
    const vastus = poed.map(yksPood => yksPood.toLowerCase());
    uuendaPoed(vastus);
  }

  const muudaKoikITahedOTaheks = () => {
    const vastus = poed.map(yksPood => yksPood.replaceAll("i", "o"));
    uuendaPoed(vastus);
  }

  const muudaKoikideleKriipsudEtte = () => {
    const vastus = poed.map(yksPood => "--" + yksPood);
    uuendaPoed(vastus);
  }

  const muudaKoikidelKolmasTahtMTaheks = () => {
    const vastus = poed.map(yksPood => yksPood + yksPood.length);
    uuendaPoed(vastus);
  }

  return (
    <div>
      <button onClick={tagasiOriginaali}>Tagasi originaal</button>
      <div>Poode on kokku: {poed.length} tk</div>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriTahedKasv}>Sorteeri tähed kasvavalt</button>
      <button onClick={sorteeriTahedKah}>Sorteeri tähed kahanevalt</button>
      <button onClick={sorteeriKolmasTaht}>Sorteeri kolmanda tähe järgi</button>
      <br /><br />
      <button onClick={filtreeriELopus}>Filtreeri kellel e lõpus</button>
      <button onClick={filtreeriKellel9Tahte}>Filtreeri kellel 9 tähte</button>
      <button onClick={filtreeriKellelVah7Tahte}>Filtreeri kellel vähemalt 7 tähte</button>
      <button onClick={filtreeriSisaldabTaheLyhenditIs}>Filtreeri kellel sees on is lühend</button>
      <button onClick={filtreeriKolmasTahtI}>Filtreeri kellel kolmas täht i</button>
      <br /><br />
      <button onClick={muudaKoikSuureks}>Muuda kõik suurteks tähtedeks</button>
      <button onClick={muudaKoikVaikseks}>Muuda kõik väikesteks tähtedeks</button>
      <button onClick={muudaKoikITahedOTaheks}>Muuda kõikidel i täht o täheks</button>
      <button onClick={muudaKoikideleKriipsudEtte}>Muuda kõikidele "--" ette</button>
      <button onClick={muudaKoikidelKolmasTahtMTaheks}>Muuda kõikidele pikkusenumber lõppu</button>


      {/* yksPood - Ülemiste, Viimsi, Rocca al Mare */}
      {poed.map(yksPood => <div>{yksPood}</div>)}
      <div>-------------</div>
      <div>Ülemiste</div>
      <div>Viimsi</div>
      <div>Rocca al Mare</div>
      <div>Magistrali</div>
      <div>Vesse</div>
      <div>Kristiine</div>
      <div>Järveotsa</div>
    </div>
  )
}

export default Poed