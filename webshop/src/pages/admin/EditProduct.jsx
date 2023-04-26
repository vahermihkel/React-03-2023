import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import productsFromFile from "../../data/products.json";
import config from "../../data/config.json";
import { Spinner } from 'react-bootstrap';

function EditProduct() {
  const { id } = useParams(); // URL-st tulevad muutujad on alati stringid ehk jutumärkides
                                        //                  48267401     ===   "48267401"
  const [dbProducts, setDbProducts] = useState([]); // ALATI 1024 toodet
  const productFound = dbProducts.find(oneProduct => oneProduct.id === Number(id));
  // "Nobe väike"
  // const result = productsFromFile.filter(oneProduct => oneProduct.id === Number(id))[0];
  // ["Nobe väike", "Nobe suur"][0]

  // ["BMW", "Nobe", "Tesla", "Nobe"][48267401]
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();
  const navigate = useNavigate();
  const [isIdUnique, setIdUnique] = useState(true);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(config.productsDbUrl)
      .then(res => res.json())
      .then(json => {
        // setProducts(json || []);
        setDbProducts(json || []);
        setLoading(false);
      })    // localStorage.getItem("VÕTI") || []
  }, []);

  const edit = () => {
    const index = dbProducts.findIndex(oneProduct => oneProduct.id === Number(id));

    const newProduct = {
      "id": Number(idRef.current.value),
      "name": nameRef.current.value,
      "price": Number(priceRef.current.value),
      "image": imageRef.current.value,
      "category": categoryRef.current.value,
      "description": descriptionRef.current.value,
      "active": activeRef.current.checked,
    }
    // Nii muutmised kui ka kustutamised käivad AINULT järjekorranumbri alusel
    dbProducts[index] = newProduct;
    // UUENDAN ANDMEBAASIS
    fetch(config.productsDbUrl, {"method": "PUT", "body": JSON.stringify(dbProducts)})
      .then(() => navigate("/admin/maintain-products"));
  }

  const checkIdUniqueness = () => {
      if (idRef.current.value === id) {
        setIdUnique(true);
        return;
      }
  //   -1          productsFromFile.findIndex(product => product.id === Number(idRef.current.value));
  //   undefined   productsFromFile.find(product => product.id === Number(idRef.current.value));
  //   []          productsFromFile.filter(product => product.id === Number(idRef.current.value))[0];
  //   idRef.current.value
      const index = dbProducts.findIndex(product => product.id === Number(idRef.current.value));
      if (index === -1) {
        setIdUnique(true);
      } else {
        setIdUnique(false);
      }
  }

  if (isLoading === true) {
    return <Spinner animation="grow" />
  }

  return (
    <div>
      {isIdUnique === false && <div>Entered ID is not unique!</div>}
      {productFound !== undefined && <div>
        <label>ID</label> <br />
        <input ref={idRef} onChange={checkIdUniqueness} defaultValue={productFound.id} type="number" /> <br />
        <label>Name</label> <br />
        <input ref={nameRef} defaultValue={productFound.name} type="text" /> <br />
        <label>Price</label> <br />
        <input ref={priceRef} defaultValue={productFound.price} type="number" /> <br />
        <label>Image</label> <br />
        <input ref={imageRef} defaultValue={productFound.image} type="text" /> <br />
        <label>Category</label> <br />
        <input ref={categoryRef} defaultValue={productFound.category} type="text" /> <br />
        <label>Description</label> <br />
        <input ref={descriptionRef} defaultValue={productFound.description} type="text" /> <br />
        <label>Active</label> <br />
        <input ref={activeRef} defaultChecked={productFound.active} type="checkbox" /> <br />
        <button disabled={isIdUnique === false} onClick={edit}>Edit</button>
      </div>}
      {productFound === undefined && <div>Product not found</div>}
    </div>
  )
}

export default EditProduct