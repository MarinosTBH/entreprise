import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Calendrier from '../calendrier/Calendrier';
import '../../styles.css'; // Correct path to the CSS file
import { Link } from 'react-router-dom';

function Evenment() {
  return (
    <div className="wrapper">
      
      <div className="main-content">
        <Navbar className="custom-navbar" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Gestion des événements</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="#profile"></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div>
          <h2></h2>
          <div style={{ marginBottom: '20px' }}>
          <Link to="/ajouter-evenement" className="btn btn-danger" style={{ marginRight: '10px' }}>Ajouter événement</Link>
            <button className="btn btn-primary" style={{ marginRight: '10px' }}>Mes événements</button>
            <button className="btn btn-success">Recherche</button>
          </div>
          <Calendrier />
        </div>
      </div>
    </div>
  );
}

export default Evenment;
