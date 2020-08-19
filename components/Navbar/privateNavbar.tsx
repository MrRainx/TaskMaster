import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';

const PrivateNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Task Master</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
      </Nav>
      <Form inline>
        <Button variant="outline-info">Cerrar Sesion</Button>
      </Form>
    </Navbar>
  );
};

export default PrivateNavbar;
