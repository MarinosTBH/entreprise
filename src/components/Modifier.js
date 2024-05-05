import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function Modifier({ edit, handleCloseEdit, setContacts }) {
  const [form, setForm] = useState({
    nom: edit?.nom || "",
    cin: edit?.cin || "",
    numero: edit?.numero || "",
    address: edit?.address || "",
  });

    // modifier un contact
    const handleUpdate = async (id) => {
        // Vérifier si les champs sont vides
        if (
          form?.nom == "" ||
          form?.cin == "" ||
          form?.address == "" ||
          form?.numero == ""
        ) {
          alert("veuillez remplir tous les champs");
          return;
        }
    
        // faire appel à l'API
        await axios.put(`http://localhost:3000/${id}`, {
          nom: form?.nom,
          cin: form?.cin,
          address: form?.address,
          numero: form?.numero,
        });
    
        // Mettre à jour la liste des contacts
        const data = await axios.get("http://localhost:3000/");
        setContacts(data.data);
    
        // Fermer la modal
        handleCloseEdit();
        setForm({});
      };
  return (
    edit && (
      <Modal show={edit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter nom"
                onChange={(e) => {
                  setForm({ ...form, nom: e.target.value });
                }}
                value={form?.nom}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Cin</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cin"
                onChange={(e) => {
                  setForm({ ...form, cin: e.target.value });
                }}
                value={form?.cin}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Numéro</Form.Label>
              <Form.Control
                type="text"
                placeholder="numéro"
                onChange={(e) => {
                  setForm({ ...form, numero: e.target.value });
                }}
                value={form?.numero}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Adresse</Form.Label>
              <Form.Control
                type="text"
                placeholder="adresse"
                onChange={(e) => {
                  setForm({ ...form, address: e.target.value });
                }}
                value={form?.address}
              />
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
          <Button variant="primary" onClick={()=>handleUpdate(edit?._id)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    )
  );
}
