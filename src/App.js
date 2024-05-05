import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; //fichier css bootstrap
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { listerContacts } from "./actions/contact.actions";
import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contact.contacts.contactlist);

  useEffect(() => {
    dispatch(listerContacts());
  }, []);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Edit, setEdit] = useState(false);

  const handleCloseEdit = () => setEdit(false);
  const handleShowEdit = () => setEdit(true);

  return (
    <div className="root">
      <Navbar bg="primary" expand="xl" className="flex-column" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ADMINISTRATEUR</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="p-5">
        <Button variant="primary" onClick={handleShow}>
          ajouter
        </Button>
        <h2>liste des contacts</h2>
        {contacts ? (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>id</th>
                <th>cin</th>
                <th>nom et prenom</th>
                <th>numuro</th>
                <th>adress</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{contact.cin}</td>
                  <td>{contact.nom}</td>
                  <td>{contact.numuro}</td>
                  <td>{contact.adress}</td>

                  <td>
                    <Button
                      variant="success"
                      className="me-2"
                      onClick={handleShowEdit}
                    >
                      modifier
                    </Button>
                    <Button variant="danger">supprimer</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          "aucun contact trouver"
        )}
      </div>

      {/*ajouter contact*/}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ajouter contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>nom</Form.Label>
              <Form.Control type="text" placeholder="Enter nom" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>contact</Form.Label>
              <Form.Control type="text" placeholder="contact" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      {/*modifier contact*/}

      <Modal show={Edit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>modifier contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>nom</Form.Label>
              <Form.Control type="text" placeholder="Enter nom" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>contact</Form.Label>
              <Form.Control type="text" placeholder="contact" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formBasicCheckbox"
            ></Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseEdit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;

/*
      <Container>
      <Nav defaultActiveKey="/home" className="flex-column">
      <escape></escape><escape></escape><escape></escape><escape></escape>
      <escape></escape><escape></escape><escape></escape><escape></escape>
      <escape></escape><escape></escape><escape></escape><escape></escape>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </Container>
    
  */
