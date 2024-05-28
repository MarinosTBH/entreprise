// src/components/DemissionForm.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import "./Demission.css";
const DemissionForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    noticePeriod: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form Data:', formData);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2>Demande de Démission</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formReason">
              <Form.Label>Raison</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formNoticePeriod">
              <Form.Label>Période de Préavis</Form.Label>
              <Form.Control
                type="text"
                name="noticePeriod"
                value={formData.noticePeriod}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formAdditionalInfo">
              <Form.Label>Informations Supplémentaires</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Soumettre
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default DemissionForm;
