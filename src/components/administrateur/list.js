import axios from "axios";
import React from "react";
import { Button, Table } from "react-bootstrap";

export default function List({ contacts, setContacts, handleShow, setEdit }) {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:3001/contact/${id}/supprimer`);
      const response = await axios.get("http://127.0.0.1:3001/contact/lister");
      setContacts(response.data.contactList);
    } catch (error) {
      console.error("Error deleting contact:", error);
      alert("Failed to delete contact");
    }
  };

  return (
    <div className="p-5">
      <Button variant="primary" onClick={handleShow}>
        ajouter
      </Button>
      <h2>liste des contacts</h2>
      {contacts.length > 0 ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Cin</th>
              <th>Nom et Prenom</th>
              <th>Numero</th>
              <th>Adress</th>
              <th>Matricule</th>
              <th>Mod de passe</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{contact.cin}</td>
                <td>{contact.nom}</td>
                <td>{contact.numero}</td>
                <td>{contact.adress}</td>
                <td>{contact.matricul}</td>
                <td>{contact.password}</td>
                <td>
                  <Button
                    variant="success"
                    className="me-2"
                    onClick={() => setEdit(contact)}
                  >
                    modifier
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(contact._id)}
                  >
                    supprimer
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        "aucun contact trouvé"
      )}
    </div>
  );
}
