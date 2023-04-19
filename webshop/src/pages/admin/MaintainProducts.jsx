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