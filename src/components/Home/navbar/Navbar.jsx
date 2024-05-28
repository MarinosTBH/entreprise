// Navbar.jsx (ancien Sidebar.jsx)
import React, { useState } from 'react';
import { BiHome, BiLogIn, BiMenu } from 'react-icons/bi';
import unnamede from '../../Assets/unnamede.png';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={unnamede} alt="Logo" className="logo-img" />
      </div>
      <div className="menu-list">
        <Link to="/" className="menu-item">
          <BiHome className="icon" />
          Accueil
        </Link>
        
        <Link to="/Administrateur" className="menu-item">
          <BiLogIn className="icon" />
          Administrateur
        </Link>
        <Link to="/rh" className="menu-item">
          <BiLogIn className="icon" />
          RH-Event
        </Link>
        <Link to="/lerning" className="menu-item">
          <BiLogIn className="icon" />
          E-Lerning
        </Link>
        <Link to="/Projet" className="menu-item">
          <BiLogIn className="icon" />
          G-Projet
        </Link>
        <Link to="/enenment" className="menu-item">
          <BiLogIn className="icon" />
          Evenement
        </Link>
        <Link to="/Reservation" className="menu-item">
          <BiLogIn className="icon" />
          Réservatipon salle de réunion
        </Link>

       
        
      </div>
    </div>
  );
}

export default Navbar;
