
import { useState } from 'react';
import Map from '../../components/Map';
import Button from '@mui/material/Button';

function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});

  return (<div>
    <Button onClick={() => setCoordinates({lngLat: [58.8294, 25.7571], zoom: 7})}>Kõik poed</Button>
    <Button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik Tallinna poed</Button>
    <Button onClick={() => setCoordinates({lngLat: [59.4231, 24.7991], zoom: 13})}>Ülemiste</Button>
    <Button onClick={() => setCoordinates({lngLat: [59.4277, 24.7193], zoom: 13})}>Kristiine</Button>
    <Button onClick={() => setCoordinates({lngLat: [58.3779, 26.7308], zoom: 13})}>Tasku</Button>
    <Map mapCoordinaates={coordinaates}  />
  </div>)
}

export default Shops;