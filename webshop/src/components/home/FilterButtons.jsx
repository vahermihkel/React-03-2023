import React from 'react'
import Button from '@mui/material/Button';

function FilterButtons({dbProducts, setProducts, categories}) {

  const filterProductsByCategory = (categoryClicked) => {
    // 240  ---> 60
    const filteredProducts = dbProducts.filter(product => product.category === categoryClicked)
    // 60
    setProducts(filteredProducts);
  }

  return (
    <div>
      {categories.map(element => 
        <Button onClick={()=> filterProductsByCategory(element.name)}>
          {element.name}
        </Button>)}
      {/* <Button onClick={()=> filterProductsByCategory("lamp")}>Lamp</Button>
      <Button onClick={()=> filterProductsByCategory("led")}>Led</Button>
      <Button onClick={()=> filterProductsByCategory("robot vacuum")}>Robot vacuums</Button>
      <Button onClick={()=> filterProductsByCategory("stick vacuum")}>Stick vacuums</Button> */}
    </div>
  )
}

export default FilterButtons