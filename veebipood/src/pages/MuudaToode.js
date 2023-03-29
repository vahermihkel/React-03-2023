import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import tootedFailist from "../data/tooted.json";

function MuudaToode() {
  const { index } = useParams(); // App.js failis: path="muuda/:index"
  const leitud = tootedFailist[index];
  const nimiRef = useRef(); // import!

  const muuda = () => {
    tootedFailist[index] = nimiRef.current.value;
    // ["BMW", "Nobe", "Tesla"][0] = "Audi"   ->  ["Audi", "Nobe", "Tesla"]
  };

  return (
    <div>
      {leitud !== undefined && (
        <div>
          <label>Toote nimi</label> <br />
          <input type="text" ref={nimiRef} defaultValue={leitud} /> <br />
          <button onClick={muuda}>Uuenda</button> <br />
        </div>
      )}
      {leitud === undefined && <div>Tooted ei leitud!</div>}
    </div>
  );
}

export default MuudaToode;
