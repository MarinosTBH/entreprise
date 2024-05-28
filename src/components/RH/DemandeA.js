// src/components/AttestationForm.js

import React, { useState } from 'react';
import axios from 'axios';
import "./AttestationsPage.css";
import Modal from 'react-bootstrap/Modal';


const DemandeA = () => {
  const [raison, setRaison] = useState('');
  const [langue, setLangue] = useState('');
  const [message, setMessage] = useState('');

  const handleConfirm = async () => {
    try {
      const response = await axios.post('http://localhost:3000/Attestations', {
        name: raison,
        date: new Date(),
        details: langue
      });
      console.log('Response:', response.data);
      setMessage('Attestation ajoutée avec succès!');
      setRaison('');
      setLangue('');
    } catch (error) {
      console.error('Error:', error);
      setMessage('Erreur lors de l\'ajout de l\'attestation.');
    }
  };

  return (
    <div className="attestation-form container mt-5">
      <h2>Attestation De Présence</h2>
      {message && <div className="alert alert-info">{message}</div>}
      <div className="form-group">
        <label>Raison</label>
        <textarea
          className="form-control"
          value={raison}
          onChange={(e) => setRaison(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Langue</label>
        <select
          className="form-control"
          value={langue}
          onChange={(e) => setLangue(e.target.value)}
        >
          <option value="">Select...</option>
          <option value="ar">Arabe</option>
          <option value="fr">Français</option>
          <option value="en">English</option>
          {/* Ajoutez d'autres options si nécessaire */}
        </select>
      </div>
      <div className="buttons">
        <button className="btn btn-warning mr-2" onClick={() => { setRaison(''); setLangue(''); }}>Annuler</button>
        <button className="btn btn-primary" onClick={handleConfirm}>Confirmer</button>
      </div>
    </div>
  );
};

export default DemandeA;
