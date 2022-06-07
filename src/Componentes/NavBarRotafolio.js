import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { RoutersLinks } from '../Constantes/RoutersLinks';

const NavBarRotafolio = () => {

   return (
      <Navbar bg="light" expand="lg">
         <Container>
            <Navbar.Brand href={RoutersLinks.Home}>Rotafolio - Duraphat</Navbar.Brand>
         </Container>
      </Navbar>
   );
};

export default NavBarRotafolio;