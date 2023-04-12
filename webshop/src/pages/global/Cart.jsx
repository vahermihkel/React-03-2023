import React, { useState } from 'react'
// import cartFromFile from "../../data/cart.json";
import { Link } from 'react-router-dom';
import "../../css/Cart.css";
import Button from '@mui/material/Button';

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

  const decreaseQuantity = (index) => {
    if (cart[index].quantity === 1) {
      return;
    }
    cart[index].quantity = cart[index].quantity - 1;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const increaseQuantity = (index) => {
    cart[index].quantity = cart[index].quantity + 1;
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const removeFromCart = (index) => {
    cart.splice(index, 1);
    setCart(cart.slice());
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  const totalSum = () => {
    let sum = 0;
    cart.forEach(element => sum = sum + element.product.price * element.quantity);
    return sum.toFixed(2);
  };

  return (
    <div>
      {cart.length > 0 && 
        <div className="cart-top">
          <Button variant="outlined" onClick={emptyCart}>Empty all</Button>
          <div>Products in cart: {cart.length}</div>
        </div>
      }
      {/* {cart.length > 0 && } */}
      {cart.map((element, index) => 
        <div className="product" key={index}>
            <img className="image" src={element.product.image} alt="" />
            <div className="name">{element.product.name}</div>
            <div className="price">{element.product.price.toFixed(2)}</div>
            <div className="quantity">
              <img src="/minus.png" className={element.quantity === 1 ? "disabled" : "button"} onClick={() => decreaseQuantity(index)} alt="" />
              <div>{element.quantity}</div>
              <img src="/plus.png" className="button" onClick={() => increaseQuantity(index)} alt="" />
            </div>
            <div className="total">{(element.product.price * element.quantity).toFixed(2)}</div>
            <img src="/remove.png" className="button" onClick={() => removeFromCart(index)} alt="" />
        </div>
        )}
      {cart.length > 0 && 
        <div className="cart-bottom">
          Total: {totalSum()} €
        </div>
      }
      
      {cart.length === 0 && 
        <div className="center">
          <br />
          Basket is empty. <Link to="/">Go shopping</Link>
        </div>}
    </div>
  )
}

export default Cart