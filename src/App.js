import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; //fichier css bootstrap
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import List from "./components/list";
import Ajouter from "./components/Ajouter";
import Modifier from "./components/Modifier";

function App() {
  // Lister les contacts
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get("http://127.0.0.1:3000/");
      setContacts(data.data);
    }
    fetchData();
  }, []); // [someId]); // Or [] if effect doesn't need props or state

  const [form, setForm] = useState({});
  // Ajouter un contact
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérifier si les champs sont vides
    if (
      form?.nom == "" ||
      form?.contact == "" ||
      form?.cin == "" ||
      form?.address == "" ||
      form?.numero == ""
    ) {
      alert("veuillez remplir tous les champs");
      return;
    }

    // faire appel à l'API
    await axios.post("http://localhost:3000/", {
      nom: form?.nom,
      cin: form?.cin,
      address: form?.address,
      numero: form?.numero,
    });

    // Mettre à jour la liste des contacts
    const data = await axios.get("http://localhost:3000/");
    setContacts(data.data);

    // Fermer la modal
    handleClose();
    setForm({});
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [edit, setEdit] = useState(null);
  const handleCloseEdit = () => setEdit(null);

  return (
    <div className="root">
      <Navbar bg="primary" expand="xl" className="flex-column" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ADMINISTRATEUR</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        </Container>
      </Navbar>

      <List
        contacts={contacts}
        handleShow={handleShow}
        setEdit={setEdit}
        setContacts={setContacts}
      />

      {/*ajouter contact*/}
      <Ajouter
        show={show}
        handleClose={handleClose}
        setForm={setForm}
        form={form}
        handleSubmit={handleSubmit}
      />

      {/*modifier contact*/}
      {edit && (
        <Modifier
          edit={edit}
          setForm={setForm}
          form={form}
          handleCloseEdit={handleCloseEdit}
          setContacts={setContacts}
        />
      )}
    </div>
  );
}

export default App;
