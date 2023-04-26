import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import productsFromFile from "../../data/products.json";
import config from "../../data/config.json";
import { Spinner } from 'react-bootstrap';

function SingleProduct() {
  const { id } = useParams();

  // EI TOHI TEHA productsFromFile[id], seda teeme siis kui saadame indexi
  // product.id abil leiab alati õige

  // PEAB TEGEMA: productsFromFile.find(e => e.id === Number(id))
  const [dbProducts, setDbProducts] = useState([]); // ALATI 1024 toodet
  const found = dbProducts.find(element => element.id === Number(id));
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        setDbProducts(json || []);
        setLoading(false);
      })    // localStorage.getItem("VÕTI") || []
  }, []);

  if (isLoading === true) {
    return <Spinner />
  }

  return (
    <div>
      {found !== undefined && 
        <div>
          <img src={found.image} alt="" />
          <div>{found.id}</div>
          <div>{found.name}</div>
          <div>{found.description}</div>
          <div>{found.category}</div>
        </div>}
      {found === undefined && <div>Product not found</div>}
    </div>
  )
}

export default SingleProduct