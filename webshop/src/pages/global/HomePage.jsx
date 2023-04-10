import React, { useState } from 'react';
import productsFromFile from "../../data/products.json";
// import cartFromFile from "../../data/cart.json";
import { Link } from 'react-router-dom';

function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  const sortAZ = () => {
    products.sort((a,b) => a.name.localeCompare(b.name));
    setProducts(products.slice());
  }

  const sortZA = () => {
    products.sort((a,b) => b.name.localeCompare(a.name));
    setProducts(products.slice());
  }

  const sortPriceAsc = () => {
    products.sort((a, b) => a.price - b.price);
    setProducts(products.slice());
  };

  const sortPriceDesc = () => {
    products.sort((a, b) => b.price - a.price);
    setProducts(products.slice());
  };

  const addToCart = (clickedProduct) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(clickedProduct);
    localStorage.setItem("cart", JSON.stringify(cart));
    // cartFromFile.push(clickedProduct);
    // LISAGE TOAST, SISUGA: "Successfully added to cart"
  }

  return (
    <div>
      <button onClick={sortAZ}>Sort AZ</button>
      <button onClick={sortZA}>Sort ZA</button>
      <button onClick={sortPriceAsc}>Lower price first</button>
      <button onClick={sortPriceDesc}>Higer price first</button>

      <div>{products.length} tk</div>
      {products.map(product => 
        <div key={product.id}>
          <Link to={"/product/" + product.id}>
            <img src={product.image} alt="" />
            <div>{product.name}</div>
            <div>{product.price}</div>
          </Link>
          <button onClick={() => addToCart(product)}>Lisa ostukorvi</button>
        </div>
        )}
    </div>
  )
}

export default HomePage