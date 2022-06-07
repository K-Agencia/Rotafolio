import { Routes, Route } from "react-router-dom";
import Sliders from './Componentes/Sliders';
import { RoutersLinks } from './Constantes/RoutersLinks.js';
import PPAplicacion from './Componentes/Pre_Post_Aplicacion';
import Folleto from "./Componentes/Folleto";

import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

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
