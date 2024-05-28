import React from 'react';
import '../../styles/EventForm.css';

function EventForm() {
  return (
    <div className="event-form-container">
      <h2>Ajouter événement</h2>
      <form>
        <div className="form-group">
          <label htmlFor="eventType">Type d'événement</label>
          <select className="form-control" id="eventType">
            <option>Audit</option>
            <option>Formation</option>
            <option>Réunion</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="startDate">Date Début Événement</label>
          <input type="date" className="form-control" id="startDate" />
        </div>
        <div className="form-group">
          <label htmlFor="startTime">Heure début événement</label>
          <input type="time" className="form-control" id="startTime" />
        </div>
        <div className="form-group">
          <label htmlFor="endDate">Date Fin Événement</label>
          <input type="date" className="form-control" id="endDate" />
        </div>
        <div className="form-group">
          <label htmlFor="endTime">Heure fin événement</label>
          <input type="time" className="form-control" id="endTime" />
        </div>
        <div className="form-group">
          <label htmlFor="title">Titre</label>
          <input type="text" className="form-control" id="title" />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea className="form-control" id="description"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Ajouter</button>
      </form>
    </div>
  );
}

export default EventForm;
