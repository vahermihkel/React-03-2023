import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import { CartSumContext } from '../store/CartSumContext';
import { AuthContext } from '../store/AuthContext';

function NavigationBar() {
  const { t, i18n } = useTranslation(); 
  const { cartSum } = useContext(CartSumContext);
  const { loggedIn, setLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  // use --> Reacti erikood    
  // useSuperPower()  useRef()   useState   useNavigate()   useContext()  useTranslation()

  const updateLanguage = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  }

  const logout = () => {
    setLoggedIn(false);
    navigate("/");
    sessionStorage.removeItem("token");
  }

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
        <Nav className="me-auto">
          {loggedIn === true && <Nav.Link as={Link} to="/admin">{t("nav.admin")}</Nav.Link>}
          <Nav.Link as={Link} to="/contact">{t("nav.contact")}</Nav.Link>
          <Nav.Link as={Link} to="/shops">{t("nav.shops")}</Nav.Link>
          <Nav.Link as={Link} to="/cart">{t("nav.cart")}</Nav.Link>
         {loggedIn === false && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
         {loggedIn === false && <Nav.Link as={Link} to="/signup">Signup</Nav.Link>}
         {loggedIn === true && <button onClick={logout}>Logout</button>}
        </Nav>
        <div>{cartSum} €</div>
        <img className="lang" src="/english.png" alt="" onClick={() => updateLanguage("en")} />
        <img className="lang" src="/estonian.png" alt="" onClick={() => updateLanguage("ee")} />
      </Container>
    </Navbar>
  )
}

export default NavigationBar