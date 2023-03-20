import React, { useState } from 'react'

function Meist() {
  const [n2itaEmaili, uuendaN2itaEmaili] = useState(false); // null  ---->     ""
  const [aadress, uuendaAadress] = useState(localStorage.getItem("aadress") || "");
  const [telefon, uuendaTelefon] = useState(localStorage.getItem("telefon") || "");

  return (
    <div>
      {/* !! localStorage on nähtav VAID MEIE ARVUTIS, SELLES BRAUSERIS KUHU TA SALVESTATI */}
      <div>Meie aadress: 
          {aadress} 
          <button onClick={() => uuendaAadress(aadress.toUpperCase())}>Suurteks</button> 
          <button onClick={() => uuendaAadress(aadress.toLowerCase())}>Väikesteks</button> 
      </div>
      <div>Meie email: 
          {n2itaEmaili === false && <button onClick={() => uuendaN2itaEmaili(true)}>Näita emaili</button>}
          {n2itaEmaili === true && localStorage.getItem("email")}
      </div>
      <div>Meie telefon: 
        {telefon} 
        { telefon.startsWith("+372") === false && 
            <button onClick={() => uuendaTelefon("+372" + telefon)}>Lisa suunakood</button> 
        }
      </div>
    </div>
  )
}

export default Meist