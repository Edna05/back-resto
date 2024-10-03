import express from 'express';
import { AutorisationController } from '../controllers/Autorisation.js';

const autorisation = express.Router();

// Récupérer toutes les autorisations
autorisation.get('/autorisation', AutorisationController.getAllAutorisations);

// Récupérer une autorisation par ID
autorisation.get('/autorisation/:id', AutorisationController.getAutorisationById);

// Créer une nouvelle autorisation
autorisation.post('/autorisation', AutorisationController.createAutorisation);

// Mettre à jour une autorisation existante
autorisation.put('/autorisation/:id', AutorisationController.updateAutorisation);

// Supprimer une autorisation
autorisation.delete('/autorisation/:id', AutorisationController.deleteAutorisation);

export default autorisation;
