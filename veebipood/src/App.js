// import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Seaded from './pages/Seaded';

function App() {
  return (
    <div className="App">
      <Link to="/">
        <img className="pilt" src="https://upload.wikimedia.org/wikipedia/en/9/99/Nobe_GT100.jpg" alt="" />
      </Link>

      <Link to="/ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>

      <Link to="/lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>

      <Link to="/seaded">
        <button className="nupp">Seaded</button>
      </Link>

      {/* <p></p>
      <div>Tekst</div> */}
      {/* <span></span> */}
      {/* <img src="https://upload.wikimedia.org/wikipedia/en/9/99/Nobe_GT100.jpg" alt=""></img>
      <input type="text"></input> */}

{/* localhost:3000/avaleht       <div>1</div> */}
      <Routes>
        <Route path='' element={ <Avaleht /> } />
        <Route path='ostukorv' element={ <Ostukorv /> } />
        <Route path='lisa-toode' element={ <LisaToode /> } />
        <Route path='seaded' element={ <Seaded /> } />
      </Routes>

    </div>
  );
}

export default App;
