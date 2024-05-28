import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function Modifier({ edit, handleCloseEdit, setContacts }) {
  const [form, setForm] = useState({
    nom: edit?.nom || "",
    cin: edit?.cin || "",
    numero: edit?.numero || "",
    adress: edit?.adress || "",
    matricul: edit?.matricul || "",
    password: edit?.password || ""
  });

  const handleUpdate = async (id) => {
    if (
      form?.nom === "" ||
      form?.cin === "" ||
      form?.adress === "" ||
      form?.numero === "" ||
      form?.matricul === ""||
      form?.password === ""
    ) {
      alert("veuillez remplir tous les champs");
      return;
    }

    try {
      await axios.put(`http://127.0.0.1:3001/contact/${id}/modifier`, {
        nom: form?.nom,
        cin: form?.cin,
        adress: form?.adress,
        numero: form?.numero,
        matricul: form?.matricul,
        password: form?.password,
      });

      const response = await axios.get("http://127.0.0.1:3001/contact/lister");
      setContacts(response.data.contactList);

      handleCloseEdit();
      setForm({});
    } catch (error) {
      console.error("Error updating contact:", error);
      alert("Failed to update contact");
    }
  };

  return (
    edit && (
      <Modal show={!!edit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Modifier contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter nom"
                onChange={(e) => setForm({ ...form, nom: e.target.value })}
                value={form.nom}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Cin</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cin"
                onChange={(e) => setForm({ ...form, cin: e.target.value })}
                value={form.cin}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Numéro</Form.Label>
              <Form.Control
                type="text"
                placeholder="Numéro"
                onChange={(e) => setForm({ ...form, numero: e.target.value })}
                value={form.numero}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Adresse</Form.Label>
              <Form.Control
                type="text"
                placeholder="Adresse"
                onChange={(e) => setForm({ ...form, adress: e.target.value })}
                value={form.adress}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Matricule</Form.Label>
              <Form.Control
                type="text"
                placeholder="Matricule"
                onChange={(e) => setForm({ ...form, matricul: e.target.value })}
                value={form.matricul}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>mod de passe</Form.Label>
              <Form.Control
                type="text"
                placeholder="password"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                value={form.password}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleUpdate(edit._id)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    )
  );
}
