import React, { useEffect, useRef, useState } from 'react'

// "https://mihkel-webshop-03-2023-default-rtdb.europe-west1.firebasedatabase.app/"

function MaintainCategories() {
  const [categories, setCategories] = useState([]);
  const categoryRef = useRef();

  useEffect(() => {
    fetch("https://mihkel-webshop-03-2023-default-rtdb.europe-west1.firebasedatabase.app/categories.json")
      .then(res => res.json())
      .then(json => setCategories(json || []));
  }, []);

  const addCategory = () => {
    categories.push({"name": categoryRef.current.value});
    setCategories(categories.slice());
    fetch("https://mihkel-webshop-03-2023-default-rtdb.europe-west1.firebasedatabase.app/categories.json",
      {"method": "PUT", "body": JSON.stringify(categories)}
    )
  }

  const deleteCategory = () => {
    // TEHKE KUSTUTAMINE KODUS ---> kustutaks visuaalis, niimoodi et refreshiga tuleb tagasi

    // ANDMEBAASIST KUSTUTAMISE TEEME KOOS
  }

  return (
    <div>
      <label>Category</label>
      <input ref={categoryRef} type="text" />
      <button onClick={addCategory}>Add</button>
      {categories.map(element => <div>{element.name}</div>)}
    </div>
  )
}

export default MaintainCategories