import React, { useEffect, useState } from 'react';
// import productsFromFile from "../../data/products.json";
// import cartFromFile from "../../data/cart.json";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import Carousel from 'react-bootstrap/Carousel';
import "../../css/HomePage.css";
import config from "../../data/config.json";
import { Spinner } from 'react-bootstrap';

function HomePage() {
  const [products, setProducts] = useState([]); // kõikuv seisund
  const [dbProducts, setDbProducts] = useState([]); // ALATI 240 toodet
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);
        setDbProducts(json || []);
        setLoading(false);
      })    // localStorage.getItem("VÕTI") || []
  }, []);

  useEffect(() => {
    fetch(config.categoriesDbUrl)
      .then(res => res.json())
      .then(json => {
        setCategories(json || []);
      })    // localStorage.getItem("VÕTI") || []
  }, []);

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

  const filterProductsByCategory = (categoryClicked) => {
                          // 240  ---> 60
    const filteredProducts = dbProducts.filter(product => product.category === categoryClicked)
               // 60
    setProducts(filteredProducts);
  }

  if (isLoading === true) {
    return <div className="center"><br /><br /><Spinner /></div>
  }

  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            src="https://picsum.photos/id/237/500/200"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://picsum.photos/id/337/500/200"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://picsum.photos/id/437/500/200"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Button onClick={sortAZ}>Sort AZ</Button>
      <Button onClick={sortZA}>Sort ZA</Button>
      <Button onClick={sortPriceAsc}>Lower price first</Button>
      <Button onClick={sortPriceDesc}>Higher price first</Button>

      <div>{products.length} tk</div>
      {categories.map(element => 
        <Button onClick={()=> filterProductsByCategory(element.name)}>
          {element.name}
        </Button>)}
      {/* <Button onClick={()=> filterProductsByCategory("lamp")}>Lamp</Button>
      <Button onClick={()=> filterProductsByCategory("led")}>Led</Button>
      <Button onClick={()=> filterProductsByCategory("robot vacuum")}>Robot vacuums</Button>
      <Button onClick={()=> filterProductsByCategory("stick vacuum")}>Stick vacuums</Button> */}
        <div className="products">
          {products.map(product => 
            <div className="home-product" key={product.id}>
              <Link to={"/product/" + product.id}>
                <img src={product.image} alt="" />
                <div>{product.name}</div>
                <div>{product.price.toFixed(2)}</div>
              </Link>
              <Button variant="contained" onClick={() => addToCart(product)}>Lisa ostukorvi</Button>
            </div>
            )}
        {/* </div> */}
        {/* <div> */}
        <img className="ad" src="https://picsum.photos/id/237/100/400" alt="" />
        {/* </div> */}
      </div>
      <ToastContainer 
        position="bottom-right"
        theme="dark"
        />
    </div>
  )
}

export default HomePage