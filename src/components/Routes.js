// Routes.js

import { Route, Routes } from 'react-router-dom';
import Administrateur from './Administrateur';
// Importez d'autres composants de page ici

function AppRoutes() {
  return (
    <Routes>
      <Route path="/administrateur" element={<Administrateur />} />
      {/* Ajoutez d'autres routes ici */}
    </Routes>
  );
}

export default AppRoutes;
