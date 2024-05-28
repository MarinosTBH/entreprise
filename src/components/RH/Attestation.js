// src/AttestationsPage.js
// src/AttestationsPage.js
import React from 'react';
import './AttestationsPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Attestation = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <main className="col-12 main-content">
          <div className="header d-flex justify-content-between align-items-center p-3 bg-white border-bottom">
            <h1>Ressource humaine </h1>
            <div className="user-info">
              <span className="user-name">KILANI KILANI</span>
            </div>
          </div>
          <div className="content p-3">
            <h2 className="text-danger"><i className="fas fa-file-alt"></i> Attestations</h2>
            <div className="buttons mt-4">
            <Link to="/DemandeA" className="btn btn-success mr-2">Demande attestation</Link>
              <button className="btn btn-success mr-2">Mes attestations</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Attestation;
