import { Routes, Route } from "react-router-dom";
import Sliders from './Componentes/Sliders';
import { RoutersLinks } from './Constantes/RoutersLinks.js';
import PPAplicacion from './Componentes/Pre_Post_Aplicacion';
import ReactGA from 'react-ga4';
import Folleto from "./Componentes/Folleto";

import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";

function App() {

  useEffect(() => {
    ReactGA.initialize('G-DZ70KJB8XL');
    // To Report Page View 
    ReactGA.send(window.location.pathname + window.location.search);
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route exact path={RoutersLinks.Home} element={<Sliders />} />
        <Route exact path={RoutersLinks.Protocolo} element={<PPAplicacion />} />
        <Route exact path={RoutersLinks.folleto} element={<Folleto />} />
      </Routes>
    </div>
  );
}

export default App;
