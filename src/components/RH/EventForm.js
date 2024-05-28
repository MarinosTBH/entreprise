import React from 'react';
import '../../styles/EventForm.css';
import { Link } from 'react-router-dom';

function EventForm() {
  return (
    <div className="event-form-container">
      <h2>Menu de demande</h2>
      <div className="btn-group">
      <Link to="/Attestation" className="btn btn-primary">Attestations</Link>
      <Link to="/Conges" className="btn btn-primary">Congés</Link>
        <button className="btn btn-primary">démission</button>
      </div>
      <footer className="footer">
        <p>Copyright © 2024 - All rights reserved. by <a href="#">kILANI ENTREPRISE GABES</a>.</p>
      </footer>
    </div>
  );
}

export default EventForm;
