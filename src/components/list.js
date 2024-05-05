import axios from "axios";
import React from "react";
import { Button, Table } from "react-bootstrap";

export default function List({
  contacts,
  setContacts,
  handleShow,
  setEdit,
}) {
  return (
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
              <th>numero</th>
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
                <td>{contact.numero}</td>
                <td>{contact.address}</td>

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
                    onClick={async () => {
                      await axios.delete(
                        `http://localhost:3000/${contact._id}`
                      );
                      const data = await axios.get("http://localhost:3000/");
                      setContacts(data.data);
                    }}
                  >
                    supprimer
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        "aucun contact trouvée"
      )}
    </div>
  );
}
