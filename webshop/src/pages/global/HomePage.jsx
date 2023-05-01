import React, { useContext, useEffect, useState } from 'react';
// import productsFromFile from "../../data/products.json";
// import cartFromFile from "../../data/cart.json";
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import styles from "../../css/HomePage.module.css";
import config from "../../data/config.json";
import { Spinner } from 'react-bootstrap';
import CarouselGallery from '../../components/home/CarouselGallery';
import SortButtons from '../../components/home/SortButtons';
import FilterButtons from '../../components/home/FilterButtons';
import { CartSumContext } from '../../store/CartSumContext';

function HomePage() {
  const [products, setProducts] = useState([]); // kõikuv seisund
  const [dbProducts, setDbProducts] = useState([]); // ALATI 240 toodet
  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const { setCartSum } = useContext(CartSumContext);

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
    let sum = 0;
    cart.forEach(element => sum = sum + element.product.price * element.quantity);
    setCartSum(sum.toFixed(2));
    localStorage.setItem("cart", JSON.stringify(cart));
    // cartFromFile.push(clickedProduct);
    // LISAGE TOAST, SISUGA: "Successfully added to cart"
    toast.success("Successfully added to cart!");
  }

  if (isLoading === true) {
    return <div className="center"><br /><br /><Spinner /></div>
  }

  return (
    <div>
      <CarouselGallery />
      <SortButtons
        products={products}
        setProducts={setProducts}
      />

      <div>{products.length} tk</div>
      
      <FilterButtons
        dbProducts={dbProducts}
        setProducts={setProducts}
        categories={categories}
      />
      <div className={styles.products}>
        {products.map(product => 
          <div className={styles.product} key={product.id}>
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
        <img className={styles.ad} src="https://picsum.photos/id/237/100/400" alt="" />
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