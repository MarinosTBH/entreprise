import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './projet.css';

function GestionProjet() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ code: '', project: '', category: '', percentage: '', startDate: '', endDate: '', status: '', manager: '' });
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3001/project/lister');
      setProjects(response.data.projectList);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingProject) {
      await axios.put(`http://127.0.0.1:3001/project/${editingProject._id}/modifier`, form);
      setEditingProject(null);
    } else {
      await axios.post('http://127.0.0.1:3001/project/ajouter', form);
    }
    setForm({ code: '', project: '', category: '', percentage: '', startDate: '', endDate: '', status: '', manager: '' });
    fetchProjects();
  };

  const handleEdit = (project) => {
    setForm(project);
    setEditingProject(project);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://127.0.0.1:3001/project/${id}/supprimer`);
    fetchProjects();
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h3>Gestion des projets</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Code</label>
              <input type="text" className="form-control" value={form.code} onChange={(e) => setForm({ ...form, code: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Projet</label>
              <input type="text" className="form-control" value={form.project} onChange={(e) => setForm({ ...form, project: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Catégorie</label>
              <input type="text" className="form-control" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Pourcentage</label>
              <input type="number" className="form-control" value={form.percentage} onChange={(e) => setForm({ ...form, percentage: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Date début prévue</label>
              <input type="date" className="form-control" value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Date fin prévue</label>
              <input type="date" className="form-control" value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} />
            </div>
            <div className="form-group">
              <label>État</label>
              <input type="text" className="form-control" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })} />
            </div>
            <div className="form-group">
              <label>Chef de projet</label>
              <input type="text" className="form-control" value={form.manager} onChange={(e) => setForm({ ...form, manager: e.target.value })} />
            </div>
            <button type="submit" className="btn btn-primary">Envoyer</button>
          </form>
        </div>
      </div>
      <div className="card mt-5">
        <div className="card-header">
          <h3>Liste des projets</h3>
        </div>
        <div className="card-body">
          <table className="table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Projet</th>
                <th>Date Début Prévue</th>
                <th>Date Fin Prévue</th>
                <th>État</th>
                <th>% Avanc.</th>
                <th>Chef de Projet</th>
                <th>Catégorie</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project._id}>
                  <td>{project.code}</td>
                  <td>{project.project}</td>
                  <td>{new Date(project.startDate).toLocaleDateString()}</td>
                  <td>{new Date(project.endDate).toLocaleDateString()}</td>
                  <td>{project.status}</td>
                  <td>{project.percentage}</td>
                  <td>{project.manager}</td>
                  <td>{project.category}</td>
                  <td>
                    <button className="btn btn-secondary mr-2" onClick={() => handleEdit(project)}>Modifier</button>
                    <button className="btn btn-danger" onClick={() => handleDelete(project._id)}>Supprimer</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default GestionProjet;
