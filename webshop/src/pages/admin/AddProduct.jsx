import React, { useRef, useState } from "react";
import productsFromFile from "../../data/products.json";

function AddProduct() {
  const [message, setMessage] = useState("Lisa toode!");
  const idRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const imageRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const activeRef = useRef();

  const add = () => {
    if (nameRef.current.value === "") {
      setMessage("Product has empty value, cant add!");
    } else {
      setMessage("Product " + nameRef.current.value + " added!");
      productsFromFile.push({
        id: Number(idRef.current.value),
        name: nameRef.current.value,
        price: Number(priceRef.current.value),
        image: imageRef.current.value,
        category: categoryRef.current.value,
        description: descriptionRef.current.value,
        active: activeRef.current.checked,
      });
    }
  };

  return (
    <div>
      <div>{message}</div>
      <label>Product id</label> <br />
      <input ref={idRef} type="number" /> <br />
      <label>Product name</label> <br />
      <input ref={nameRef} type="text" /> <br />
      <label>Product price</label> <br />
      <input ref={priceRef} type="number" /> <br />
      <label>Product image</label> <br />
      <input ref={imageRef} type="text" /> <br />
      <label>Product category</label> <br />
      <input ref={categoryRef} type="text" /> <br />
      <label>Product description</label> <br />
      <input ref={descriptionRef} type="text" /> <br />
      <label>Product activness</label> <br />
      <input ref={activeRef} type="checkbox" /> <br />
      <button onClick={add}>Add</button>
    </div>
  );
}

export default AddProduct;
