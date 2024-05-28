// App.js
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from "./components/Home/Home";
import Administrateur from "./components/administrateur/Administrateur";
import RH from "./components/RH/RH";
import Evenment from "./components/evenement/Evenment";
import Projet from "./components/Projet/Projet";
import Reservation from "./components/Reservation";
import Learning from "./components/Learning";
import Navbar from "./components/Home/navbar/Navbar";
import './App.css';
import EventForm from "./components/evenement/EventForm"; 
import Footer from "./components/footer/footer";
import Attestations from "./components/RH/Attestation";
import DemandeA from './components/RH/DemandeA';
import Conges from './components/RH/conges/Conges';
import DemissionForm from './components/RH/Demission/DemissionForm';

function AppContent() {
  
  return (
    <div className="app-container">
      <Navbar />
      
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RH" element={<RH />} />
          <Route path="/Evenment" element={<Evenment />} />
          <Route path="/Projet" element={<Projet />} />
          <Route path="/Learning" element={<Learning />} />
          <Route path="/Administrateur" element={<Administrateur />} />
          <Route path="/Reservation" element={<Reservation />} />
          {/* Ajoutez une route pour gérer les URL non définies */}
          <Route path="/Ajouter-evenement" element={<EventForm />} />
          <Route path="/Attestation" element={<Attestations />} />
          <Route path="/Conges" element={<Conges />} />
          <Route path="/DemandeA" element={<DemandeA />} />
          <Route path="/Projet" element={<Projet />} />
          <Route path="/DemissionForm" element={<DemissionForm />} />

        </Routes>
        <Footer />
      </div>
      
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

