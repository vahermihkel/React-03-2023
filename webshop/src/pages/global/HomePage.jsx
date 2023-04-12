import React, { useState } from 'react';
import productsFromFile from "../../data/products.json";
// import cartFromFile from "../../data/cart.json";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';

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
    
    const index = cart.findIndex(element => element.product.id === clickedProduct.id);
    if (index >= 0) {
      // siis kui ostukorvs juba on see toode
      cart[index].quantity = cart[index].quantity + 1;
    } else {
      // siis kui ostukorvis pole seda toodet
      cart.push({"product": clickedProduct, "quantity": 1});
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    // cartFromFile.push(clickedProduct);
    // LISAGE TOAST, SISUGA: "Successfully added to cart"
    toast.success("Successfully added to cart!");
  }

  // const filterProductsByCategory = (categoryClicked) => {

  // }

  return (
    <div>
      <Button onClick={sortAZ}>Sort AZ</Button>
      <Button onClick={sortZA}>Sort ZA</Button>
      <Button onClick={sortPriceAsc}>Lower price first</Button>
      <Button onClick={sortPriceDesc}>Higer price first</Button>

      <div>{products.length} tk</div>
      {products.map(product => 
        <div key={product.id}>
          <Link to={"/product/" + product.id}>
            <img src={product.image} alt="" />
            <div>{product.name}</div>
            <div>{product.price.toFixed(2)}</div>
          </Link>
          <Button variant="contained" onClick={() => addToCart(product)}>Lisa ostukorvi</Button>
        </div>
        )}
      <ToastContainer 
        position="bottom-right"
        theme="dark"
        />
    </div>
  )
}

export default HomePage