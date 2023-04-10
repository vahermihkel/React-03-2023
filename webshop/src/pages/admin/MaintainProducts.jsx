import React, { useRef, useState } from 'react';
import productsFromFile from "../../data/products.json";
import { Link } from 'react-router-dom';

function MaintainProducts() {
  const [products, setProducts] = useState(productsFromFile);
  const searchedRef = useRef();

  const deleteProduct = (index) => {
    productsFromFile.splice(index, 1);
    setProducts(productsFromFile.slice());
  }

  const searchFromProducts = () => {
    // console.log(searchedRef.current.value);
    const result = productsFromFile.filter(element => 
      element.name.toLowerCase().includes(searchedRef.current.value.toLowerCase()));
    setProducts(result);
  }

  return (
    <div>
      <input type="text" ref={searchedRef} onChange={searchFromProducts} />
      <div>{products.length} tk</div>
        {products.map((product, index) => 
          <div key={product.id}>
            <img src={product.image} alt="" />
            <div>{product.id}</div>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div>{product.image}</div>
            <div>{product.category}</div>
            <div>{product.description}</div>
            <div>{product.active}</div>
            <button onClick={() => deleteProduct(index)}>Kustuta</button>
            <Link to={"/admin/edit-product/" + product.id}>
              <button>Muuda</button>
            </Link>
          </div>
        )}
    </div>
  )
}

export default MaintainProducts