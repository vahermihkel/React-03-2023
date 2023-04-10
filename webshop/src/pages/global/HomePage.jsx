import React, { useState } from 'react';
import productsFromFile from "../../data/products.json";

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  const sortAZ = () => {
    setProducts();
  }

  // sortZA
  // sortPriceAsc
  // sortPriceDesc

  // const addToCart = () => {}
  // 1. uus fail "data" kausta sisse
  // 2. cart.json -> sisse tühi array
  // 3. siin impodime ja lisame ühe toote sinna sisse

  // 4. Cart.jsx fail valmis teha sarnaselt eesti keelsega

  return (
    <div>
      <button onClick={sortAZ}>Sort A-Z</button>
      <div>{products.length} tk</div>
      {products.map(product => 
        <div key={product.id}>
          <img src={product.image} alt="" />
          <div>{product.id}</div>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <div>{product.image}</div>
          <div>{product.category}</div>
          <div>{product.description}</div>
          <div>{product.active}</div>
          <button>Lisa ostukorvi</button>
        </div>
        )}
    </div>
  )
}

export default HomePage