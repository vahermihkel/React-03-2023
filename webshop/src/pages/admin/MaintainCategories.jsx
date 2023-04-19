import React, { useEffect, useRef, useState } from 'react'
import config from "../../data/config.json";

// "https://mihkel-webshop-03-2023-default-rtdb.europe-west1.firebasedatabase.app/"

function MaintainCategories() {
  const [categories, setCategories] = useState([]);
  const categoryRef = useRef();

  useEffect(() => {
    fetch(config.categoriesDbUrl)
      .then(res => res.json())
      .then(json => setCategories(json || []));
  }, []);

  const addCategory = () => {
    categories.push({"name": categoryRef.current.value});
    setCategories(categories.slice());
    fetch(config.categoriesDbUrl,
      {"method": "PUT", "body": JSON.stringify(categories)}
    )
  }

  const deleteCategory = (index) => {
    // TEHKE KUSTUTAMINE KODUS ---> kustutaks visuaalis, niimoodi et refreshiga tuleb tagasi
    categories.splice(index, 1);
    setCategories(categories.slice());
    // ANDMEBAASIST KUSTUTAMISE TEEME KOOS
    fetch(config.categoriesDbUrl,
      {"method": "PUT", "body": JSON.stringify(categories)}
    )
  }

  return (
    <div>
      <label>Category</label>
      <input ref={categoryRef} type="text" />
      <button onClick={addCategory}>Add</button>
      {categories.map((element, index) => 
        <div>
          {element.name} 
          <button onClick={() => deleteCategory(index)}>x</button> 
        </div>)}
    </div>
  )
}

export default MaintainCategories