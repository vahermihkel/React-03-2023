import React, { useEffect, useRef, useState } from 'react'

function ParcelMachine() {
  const [parcelMachines, setParcelMachines] = useState([]); // mida välja näitan - 5, 2, 10, 500, 1255, 3, 0
  const [dbParcelMachines, setDbParcelMachines] = useState([]); // mille seast filterdan -- ALATI 1255
  const searchedRef = useRef();

  // API endpoint    API otspunkt

  // scrape / scraping
  useEffect(() => {
    fetch("https://www.omniva.ee/locations.json")
      .then(res => res.json())
      .then(json => {
        setParcelMachines(json);
        setDbParcelMachines(json);
      })
  }, []);

  const searchFromPMs = () => {
    const result = dbParcelMachines.filter(el => 
      el.NAME.toLowerCase().includes(searchedRef.current.value.toLowerCase()))
    setParcelMachines(result);
  }

  return (
    <div>
      <input ref={searchedRef} onChange={searchFromPMs} type="text"  />
      <select className="parcelmachines">
        { parcelMachines
            .filter(el => el.A0_NAME === "EE")
            .map(el => <option>{el.NAME}</option>)}
      </select>
    </div>
  )
}

export default ParcelMachine