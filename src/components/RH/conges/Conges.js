import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Conges.css';

async function listerConges() {
    try {
        const response = await fetch('http://127.0.0.1:3001/conges/lister');
        const data = await response.json();
        return data.congesList;
    } catch (error) {
        console.error('Erreur lors de la récupération des congés:', error);
        return [];
    }
}

async function ajouterConges(conge, date, nbjour) {
    try {
        const response = await fetch('http://127.0.0.1:3001/conges/ajouter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ conge, date, nbjour })
        });
        const data = await response.json();
        console.log('Congé ajouté avec succès:', data);
        return data;
    } catch (error) {
        console.error('Erreur lors de l\'ajout du congé:', error);
    }
}

async function modifierConges(id, conge, date, nbjour) {
    try {
        const response = await fetch(`http://127.0.0.1:3001/conges/${id}/modifier`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ conge, date, nbjour })
        });
        const data = await response.json();
        console.log('Congé modifié avec succès:', data);
        return data;
    } catch (error) {
        console.error('Erreur lors de la modification du congé:', error);
    }
}

async function supprimerConges(id) {
    try {
        const response = await fetch(`http://127.0.0.1:3001/conges/${id}/supprimer`, {
            method: 'DELETE'
        });
        const data = await response.json();
        console.log('Congé supprimé avec succès:', data);
        return data;
    } catch (error) {
        console.error('Erreur lors de la suppression du congé:', error);
    }
}

function Conges() {
    const [congeType, setCongeType] = useState('Journée');
    const [dateConge, setDateConge] = useState('');
    const [nbJour, setNbJour] = useState(1);
    const [congesList, setCongesList] = useState([]);
    const [editingConge, setEditingConge] = useState(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    useEffect(() => {
        const fetchConges = async () => {
            const data = await listerConges();
            setCongesList(data);
        };
        fetchConges();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editingConge) {
            await modifierConges(editingConge._id, congeType, dateConge, nbJour);
            setEditingConge(null);
        } else {
            await ajouterConges(congeType, dateConge, nbJour);
        }
        const data = await listerConges();
        setCongesList(data);
        setShowConfirmModal(true);
    };

    const handleEdit = (conge) => {
        setCongeType(conge.conge);
        setDateConge(conge.date);
        setNbJour(conge.nbjour);
        setEditingConge(conge);
    };

    const handleDelete = async (id) => {
        await supprimerConges(id);
        const data = await listerConges();
        setCongesList(data);
    };

    const handleClearForm = () => {
        setCongeType('Journée');
        setDateConge('');
        setNbJour(1);
        setEditingConge(null);
    };

    const handleConfirmModalClose = () => setShowConfirmModal(false);

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                    <h3>Congés - Demande Congé</h3>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="congeType">Congé</label>
                            <select
                                id="congeType"
                                className="form-control"
                                value={congeType}
                                onChange={(e) => setCongeType(e.target.value)}
                            >
                                <option value="Journée">Journée</option>
                                <option value="Demi-Journée">Demi-Journée</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="dateConge">Date du congé</label>
                            <input
                                type="date"
                                id="dateConge"
                                className="form-control"
                                value={dateConge}
                                onChange={(e) => setDateConge(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nbJour">Nombre de jour</label>
                            <input
                                type="number"
                                id="nbJour"
                                className="form-control"
                                value={nbJour}
                                onChange={(e) => setNbJour(e.target.value)}
                                min="1"
                            />
                        </div>
                        <Button variant="primary" type="submit">
                            Envoyer
                        </Button>
                        
                    </form>
                </div>
            </div>
            <div className="card mt-5">
                <div className="card-header">
                    <h3>Liste des Congés</h3>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Congé</th>
                                <th>Date</th>
                                <th>Nombre de jours</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {congesList.map((conge) => (
                                <tr key={conge._id}>
                                    <td>{conge.conge}</td>
                                    <td>{new Date(conge.date).toLocaleDateString()}</td>
                                    <td>{conge.nbjour}</td>
                                    <td>
                                        <button className="btn btn-secondary mr-2" onClick={() => handleEdit(conge)}>Modifier</button>
                                        <button className="btn btn-danger" onClick={() => handleDelete(conge._id)}>Supprimer</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Modal show={showConfirmModal} onHide={handleConfirmModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Demande de congé validée avec succès!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleConfirmModalClose}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Conges;

