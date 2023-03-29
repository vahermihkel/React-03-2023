import React, { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function Seaded() {
  const [keel, uuendaKeel] = useState(localStorage.getItem("keel") || "est"); // getItem võtab viimase setItem-i
  const aadressViide = useRef();
  const emailViide = useRef();
  const telefonViide = useRef();

  const muudaKeelEst = () => {
    uuendaKeel("est");
    localStorage.setItem("keel", "est"); // sissekirjutatud JavaScripti - salvestus brauserisse
  }

  const muudaKeelEng = () => {
    uuendaKeel("eng"); // HTMLi jaoks
    localStorage.setItem("keel", "eng"); // pärast refreshi võetakse useState algväärtuseks 
  }

  const muudaKeelRus = () => {
    uuendaKeel("rus");
    localStorage.setItem("keel", "rus");
  }
// Labeli sees htmlFor=""    img sees alt="" <--- alternative text
// WCAG - Web Content Accessibility Guidelines, EU seadused, kohustuslik
    // if / else <--- teeme kontrolli, kas on meile sobiv sisu
    // else asemel "return"     TEEB SAMA VÄLJA
    // react-toastify <--- hüpikaken

  const salvestaAadress = () => {
    if (aadressViide.current.value === "") {
      toast.error("Tühja aadressi ei saa sisestada!");
      return;
    }   // Mustamäe === mustamäe
    //  // mustamäe === mustamäe
    if (aadressViide.current.value[0] === aadressViide.current.value[0].toLowerCase()) {
      toast.error("Addressi ei saa sisestada väikese algustähega!");
      return;
    }
    toast.success("Aadress edukalt sisestatud");
    localStorage.setItem("aadress", aadressViide.current.value);
  }

  const salvestaEmail = () => {
    if (emailViide.current.value === "") {
      toast.error("Tühja emaili ei saa sisestada!");
      return;
    }
    if (emailViide.current.value.includes("@") === false) {
      toast.error("E-maili ei saa sisestada kui pole @ märki");
      return;
    }
    toast.success("Email edukalt sisestatud");
    localStorage.setItem("email", emailViide.current.value);
  }

  const salvestaTelefon = () => {
    if (telefonViide.current.value === "") {
      toast.error("Tühja telefoni ei saa sisestada!");
      return;
    }
    if (/^[0-9]*$/.test(telefonViide.current.value) === false) {
      toast.error("Telefon peab koosnema ainult numbritest!");
      return;
    }
    toast.success("Telefon edukalt sisestatud");
    localStorage.setItem("telefon", telefonViide.current.value);
  }

  return (
    <div>
      <label>Meie aadress</label>
      <input ref={aadressViide} type="text" />
      <button onClick={salvestaAadress}>Sisesta</button>
      <br /><br />
      <label>Meie e-mail</label>
      <input ref={emailViide} type="text" />
      <button onClick={salvestaEmail}>Sisesta</button>
      <br /><br />
      <label>Meie telefon</label>
      <input ref={telefonViide} type="text" />
      <button onClick={salvestaTelefon}>Sisesta</button>
      <br /><br />

      <button onClick={muudaKeelEst}>Eesti keelseks</button>
      <button onClick={muudaKeelEng}>To English</button>
      <button onClick={muudaKeelRus}>Pycckij</button>
      {keel === "est" && <div>Leht on eesti keelne</div>}
      {keel === "eng" && <div>The page is in English</div>}
      {keel === "rus" && <div>Pycckij Rsõk</div>}
      <ToastContainer />
    </div>
  )
}

export default Seaded