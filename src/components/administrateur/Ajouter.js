import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function Ajouter({
  show,
  handleClose,
  setForm,
  form,
  handleSubmit,
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>ajouter contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>nom</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter nom"
              onChange={(e) => setForm({ ...form, nom: e.target.value })}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>cin</Form.Label>
            <Form.Control
              type="text"
              placeholder="Cin"
              onChange={(e) => setForm({ ...form, cin: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Numéro</Form.Label>
            <Form.Control
              type="text"
              placeholder="numéro"
              onChange={(e) => setForm({ ...form, numero: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Adresse</Form.Label>
            <Form.Control
              type="text"
              placeholder="adresse"
              onChange={(e) => setForm({ ...form, adress: e.target.value })}
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Matricule</Form.Label>
            <Form.Control
              type="text"
              placeholder="matricul"
              onChange={(e) => setForm({ ...form, matricul: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>mod de passe</Form.Label>
            <Form.Control
              type="text"
              placeholder="password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" type="reset" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
