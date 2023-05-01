import React from 'react'
import Button from '@mui/material/Button';

function SortButtons(props) {
  const sortAZ = () => {
    props.products.sort((a,b) => a.name.localeCompare(b.name));
    props.setProducts(props.products.slice());
  }

  const sortZA = () => {
    props.products.sort((a,b) => b.name.localeCompare(a.name));
    props.setProducts(props.products.slice());
  }

  const sortPriceAsc = () => {
    props.products.sort((a, b) => a.price - b.price);
    props.setProducts(props.products.slice());
  };

  const sortPriceDesc = () => {
    props.products.sort((a, b) => b.price - a.price);
    props.setProducts(props.products.slice());
  };

  return (
    <div>
      <Button onClick={sortAZ}>Sort AZ</Button>
      <Button onClick={sortZA}>Sort ZA</Button>
      <Button onClick={sortPriceAsc}>Lower price first</Button>
      <Button onClick={sortPriceDesc}>Higher price first</Button>
    </div>
  )
}

export default SortButtons