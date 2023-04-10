import React, { useState } from 'react'
// import cartFromFile from "../../data/cart.json";
import { Link } from 'react-router-dom';

// SALVESTUSE VARIANDID:
// 1. Andmebaas - Amazon, Microsoft, Oracle
      // - seda näevad kõik. Tooted. Kategooriad. Poed.
// 2. LocalStorage - Brauseris
      // - seda näen vaid mina. Ostukorv.

function Cart() {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  const emptyCart = () => {
    setCart([]); // uuendab HTMLi
    localStorage.setItem("cart", JSON.stringify([])); // see uuendab localStorage-t
  };

  const removeFromCart = (index) => {
    cart.splice(index, 1);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const totalSum = () => {
    let sum = 0;
    cart.forEach(product => sum = sum + product.price);
    return sum;
  };

  return (
    <div>
      {cart.length > 0 && <button onClick={emptyCart}>Empty all</button>}
      {cart.length > 0 && <div>Products in cart: {cart.length}</div>}
      {cart.map((product, index) => 
        <div key={index}>
            <img src={product.image} alt="" />
            <div>{product.name}</div>
            <div>{product.price}</div>
          <button onClick={() => removeFromCart(index)}>x</button>
        </div>
        )}
      {cart.length > 0 && <div>Total: {totalSum()} €</div>}
      {cart.length === 0 && <div>Basket is empty. <Link to="/">Go shopping</Link></div>}
    </div>
  )
}

export default Cart