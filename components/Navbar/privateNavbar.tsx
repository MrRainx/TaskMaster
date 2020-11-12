import Link from 'next/link';
import React from 'react';
import { Button, Form, Nav, Navbar } from 'react-bootstrap';


const PrivateNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Inicio</Navbar.Brand>
      <Nav className="mr-auto">
        <li className="nav-item active">
          <Link href="/tags">
            <a className="nav-link">Tags</a>
          </Link>
        </li>
      </Nav>
      <Form inline>
        <Button variant="outline-info">Cerrar Sesion</Button>
      </Form>
    </Navbar>
  );
};

export default PrivateNavbar;
