import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/global/HomePage';
import Cart from './pages/global/Cart';
import {ContactUs} from './pages/global/ContactUs';
import Shops from './pages/global/Shops';
import SingleProduct from './pages/global/SingleProduct';
import AdminHome from './pages/admin/AdminHome';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import MaintainProducts from './pages/admin/MaintainProducts';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaintainShops from './pages/admin/MaintainShops';
import NavigationBar from './components/NavigationBar';

function App() {

  // Firebase-i üles  --->   faili järgi: 8-s, video järgi vaadata - 3.koolitus
  // react-toastify
  
  // Siia projekti lisage ka 3s ja 4s keel
  // Favicon
  // projekti nimi
  // Google Font lisada

  // Pange mõnda teise projekti ka Bootstrap
  // Pange mõnda teise projekti ka React-i18next

  return (
    <div className="App">
      <NavigationBar />

      <Routes>
        <Route path="" element={ <HomePage /> } />
        <Route path="cart" element={ <Cart /> } />
        <Route path="contact" element={ <ContactUs /> } />
        <Route path="shops" element={ <Shops /> } />
        <Route path="product/:id" element={ <SingleProduct /> } />
        <Route path="admin" element={ <AdminHome /> } />
        <Route path="admin/add-product" element={ <AddProduct /> } />
        <Route path="admin/edit-product/:id" element={ <EditProduct /> } />
        <Route path="admin/maintain-products" element={ <MaintainProducts /> } />
        <Route path="admin/maintain-categories" element={ <MaintainCategories /> } />
        <Route path="admin/maintain-shops" element={ <MaintainShops /> } />
      </Routes>

      <div className="footer">FOOTER</div>
    </div>
  );
}

export default App;

// NodeJS on mootor, mis paneb Reacti käima
// Angular
// Vue
// React
