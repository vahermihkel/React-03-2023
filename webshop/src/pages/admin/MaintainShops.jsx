import React, { useEffect, useRef, useState } from 'react'
import config from "../../data/config.json"

function MaintainShops() {
  const [message, setMessage] = useState("Lisa pood!");

  const nameRef = useRef();
  const openTimeRef = useRef();
  const latitudeRef = useRef();
  const longitudeRef = useRef();
  const [dbShops, setDbShops] = useState([]);

  useEffect(() => {
    fetch(config.shopsDbUrl)
    .then(res => res.json())
    .then(json => {
      setDbShops(json || []);
    })
  }, []);

  const add = () => {
    if (nameRef.current.value === "") {
      setMessage("Name has emty value, cant add!")
      return;
    }
    if (openTimeRef.current.value === "") {
      setMessage("Open time has emty value, cant add!")
      return;
    }
    if (latitudeRef.current.value === "") {
      setMessage("Latitude has emty value, cant add!")
      return;
    }
    if (longitudeRef.current.value === "") {
      setMessage("Longitude has emty value, cant add!")
      return;
    }
    setMessage ("Product " + nameRef.current.value + " added!");
    dbShops.push({
      "name": nameRef.current.value,
      "openTime": openTimeRef.current.value, // 9-22   -13      "9-22"
      "latitude" : Number(latitudeRef.current.value),
      "longitude": Number(longitudeRef.current.value)
    })
      fetch(config.shopsDbUrl, {"method": "PUT", "body": JSON.stringify(dbShops)});
  }

  const deleteShop = (index) => {
    dbShops.splice(index,1);
    setDbShops(dbShops.slice());
    fetch(config.shopsDbUrl, {"method": "PUT", "body": JSON.stringify(dbShops)});
  }

  return (
    <div>
      <div>{message}</div>
      <label>Shop name</label> <br />
      <input ref = {nameRef}type="text" /> <br />
      <label>Shop open time</label><br />
      <input ref = {openTimeRef}type="text" /> <br />
      <label>Shop latitude</label><br />
      <input ref = {latitudeRef}type="number" /> <br />
      <label>Shop longitude</label><br />
      <input ref = {longitudeRef}type="number" /> <br />
      <button onClick={add}>Add</button>
      {dbShops.map((element, index) => 
        <div>
          <div>{element.name}</div>
          <div>{element.openTime}</div>
          <div>{element.latitude}</div>
          <div>{element.longitude}</div>
          <button onClick={() => deleteShop(index)}>x</button>
        </div>)}
    </div>
  )
}

export default MaintainShops;