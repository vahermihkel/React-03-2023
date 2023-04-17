import React from 'react'
import { useParams } from 'react-router-dom'
import productsFromFile from "../../data/products.json";

function SingleProduct() {
  const { id } = useParams();

  // EI TOHI TEHA productsFromFile[id], seda teeme siis kui saadame indexi
  // product.id abil leiab alati õige

  // PEAB TEGEMA: productsFromFile.find(e => e.id === Number(id))
  const found = productsFromFile.find(element => element.id === Number(id));

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