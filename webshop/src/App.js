import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
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
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import { useContext } from 'react';
import { AuthContext } from './store/AuthContext';
import NotFound from './pages/global/NotFound';

function App() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div className="App">
      <NavigationBar />

      <Routes>
        <Route path="" element={ <HomePage /> } />
        <Route path="cart" element={ <Cart /> } />
        <Route path="contact" element={ <ContactUs /> } />
        <Route path="shops" element={ <Shops /> } />
        <Route path="product/:id" element={ <SingleProduct /> } />
        {loggedIn === true ?
        <>
          <Route path="admin" element={ <AdminHome /> } />
          <Route path="admin/add-product" element={ <AddProduct /> } />
          <Route path="admin/edit-product/:id" element={ <EditProduct /> } />
          <Route path="admin/maintain-products" element={ <MaintainProducts /> } />
          <Route path="admin/maintain-categories" element={ <MaintainCategories /> } />
          <Route path="admin/maintain-shops" element={ <MaintainShops /> } />
        </> :
        <>
          <Route path="login" element={ <Login /> } />
          <Route path="signup" element={ <Signup /> } />
          <Route path="admin/*" element={ <Navigate to="/login" /> } />
        </>
        }
        <Route path="*" element={ <NotFound /> } />
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

// 1.05 child componendid --> props
// 3.05 context ehk globaalne muutuja
// 8.05 proovitöö

// Lõpuprojekt:
// Ükskõik mis asi, mis hõlmab Reacti kasutamist
// Firebase-i üles

// Võite midagi internetist võtta, mugandada enda jaoks
// Tutorialid + Youtube + Udemy
// Oma ideed

// 31.05
