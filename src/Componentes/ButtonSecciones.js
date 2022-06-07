import React from 'react';
import { Dropdown } from 'react-bootstrap';

const ButtonSecciones = ({ handleSlider }) => {

   const handleSeccion = (idSeccion) => {
      handleSlider(idSeccion);
   }

   return (
      <div className='ButtonSecciones'>

         <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
               Secciones
            </Dropdown.Toggle>

            <Dropdown.Menu>
               <Dropdown.Item onClick={() => handleSeccion(3)}>Placa Bacteriana - Biopelícula</Dropdown.Item>
               <Dropdown.Item onClick={() => handleSeccion(4)}>Enfermedades Bucales</Dropdown.Item>
               <Dropdown.Item onClick={() => handleSeccion(6)}>Progreso de la caries</Dropdown.Item>
               <Dropdown.ItemText><b>¿Cuándo hacer aplicación?</b></Dropdown.ItemText>
               <Dropdown.Item className="listNav" onClick={() => handleSeccion(9)}>Niños</Dropdown.Item>
               <Dropdown.Item className="listNav" onClick={() => handleSeccion(11)}>Adolescentes</Dropdown.Item>
               <Dropdown.Item className="listNav" onClick={() => handleSeccion(12)}>Adultos</Dropdown.Item>
               <Dropdown.Item className="listNav" onClick={() => handleSeccion(13)}>Adultos Mayores</Dropdown.Item>
               <Dropdown.Item onClick={() => handleSeccion(14)}>¿Es segura la aplicación?</Dropdown.Item>
               <Dropdown.Item onClick={() => handleSeccion(15)}><b>Otros usos</b></Dropdown.Item>
               <Dropdown.Item className="listNav" onClick={() => handleSeccion(16)}>Sensibilidad dental</Dropdown.Item>
               <Dropdown.Item className="listNav" onClick={() => handleSeccion(17)}>Aparatología Ortodóntica</Dropdown.Item>
               <Dropdown.Item onClick={() => handleSeccion(19)}>Consejos de ortodoncia</Dropdown.Item>
               <Dropdown.Item onClick={() => handleSeccion(20)}>Cuidados posteriores a la aplicación</Dropdown.Item>
               <Dropdown.Item onClick={() => handleSeccion(21)}>Tarjeta Colgate Pass</Dropdown.Item>
            </Dropdown.Menu>
            
         </Dropdown>

      </div>
   );
};

export default ButtonSecciones;