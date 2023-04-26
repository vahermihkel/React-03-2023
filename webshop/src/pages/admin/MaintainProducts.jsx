import React, { useEffect, useRef, useState } from 'react';
// import productsFromFile from "../../data/products.json";
import config from "../../data/config.json";
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

function MaintainProducts() {
  // const [products, setProducts] = useState(productsFromFile);
  const searchedRef = useRef();
  const [products, setProducts] = useState([]); // kõikuv seisund
  const [dbProducts, setDbProducts] = useState([]); // ALATI 240 toodet
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        setProducts(json || []);
        setDbProducts(json || []);
        setLoading(false);
      })    // localStorage.getItem("VÕTI") || []
  }, []);

  const deleteProduct = (index) => {
    dbProducts.splice(index, 1);
    setProducts(dbProducts.slice());
  }

  const searchFromProducts = () => {
    // console.log(searchedRef.current.value);
    const result = dbProducts.filter(element => 
      element.name.toLowerCase().includes(searchedRef.current.value.toLowerCase()));
    setProducts(result);
  }

  if (isLoading === true) {
    return <Spinner />
  }

  return (
    <div>
      <input type="text" ref={searchedRef} onChange={searchFromProducts} />
      <div>{products.length} tk</div>
      <table>
        <tr>
          <th>Image</th>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Image URL</th>
          <th>Category</th>
          <th>Description</th>
          <th>Active</th>
        </tr>
        {products.map((product, index) => 
          <tr key={product.id}>
            <td><img className="image" src={product.image} alt="" /></td>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.image}</td>
            <td>{product.category}</td>
            <td>{product.description}</td>
            <td>{product.active}</td>
            <button onClick={() => deleteProduct(index)}>Kustuta</button>
            <Link to={"/admin/edit-product/" + product.id}>
              <button>Muuda</button>
            </Link>
          </tr>
        )}
      </table>
    </div>
  )
}

export default MaintainProducts