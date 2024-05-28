import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "./list";
import Ajouter from "./Ajouter";
import Modifier from "./Modifier";

function Administrateur() {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({});
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://127.0.0.1:3001/contact/lister");
        setContacts(response.data.contactList); 
      } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to fetch contacts");
      }
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form?.nom || !form?.cin || !form?.adress || !form?.numero || !form?.matricul || !form?.password ) {
      alert("Veuillez remplir tous les champs");
      return;
    }

    try {
      await axios.post("http://127.0.0.1:3001/contact/ajouter", form);

      const response = await axios.get("http://127.0.0.1:3001/contact/lister");
      setContacts(response.data.contactList);

      handleClose();
      setForm({});
    } catch (error) {
      console.error("Error adding contact:", error);
      alert("Failed to add contact");
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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

      <List contacts={contacts} handleShow={handleShow} setEdit={setEdit} setContacts={setContacts} />

      <Ajouter show={show} handleClose={handleClose} setForm={setForm} form={form} handleSubmit={handleSubmit} />

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

export default Administrateur;
