import React from 'react';

import Header from './Header';  
import EventForm from './EventForm';  
import '../../styles/Home.css';


function App() {
  return (
    <div className="App">
     
      <div className="main-content">
        <Header />
        <div className="content">
          <EventForm />
          
        </div>
      </div>
    </div>
  );
}

export default App;


