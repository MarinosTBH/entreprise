import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
function Header() {
  return (
    <header className="header">
      <div className="user-info">
      <Navbar className="custom-navbar" variant="dark">
          <Container>
          <Navbar.Brand href="#home" className="brand-text">Ressource Humain</Navbar.Brand> {/* Ajoutez la classe brand-text */}
            <Nav className="ml-auto">
              <Nav.Link href="#profile"></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </header>
  );
}

export default Header;
