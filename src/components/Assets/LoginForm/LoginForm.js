import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from 'react-icons/fa';

function LoginFrom() {
  const [matricule, setMatricule] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ matricule, password }),
      });

      const data = await res.json();
      if (res.ok) {
        // Sauvegarder le token JWT dans le stockage local ou dans un cookie
        localStorage.setItem('token', data.token);
        window.location.href = '/';
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Erreur lors de la connexion', error);
    }
  };

  return (
    <div className="wrapper">
      <form action="" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <h1>LOGIN</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder="Matricule"
            value={matricule}
            onChange={(e) => setMatricule(e.target.value)}
            required
          />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Mod de Passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock className="icon" />
        </div>
        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Se souvenir de moi
          </label>
          <a href="#">Mot de passe oublié?</a>
        </div>
        <button type="submit">Connexion</button>
        <div className="register-link">
          <p>je n'ai pas de compte? <a href="#">inscription</a></p>
        </div>
      </form>
    </div>
  );
}

export default LoginFrom;
