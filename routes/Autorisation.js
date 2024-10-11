import express from 'express';
import { AutorisationController } from '../controllers/Autorisation.js';

const autorisation = express.Router();

// Récupérer toutes les autorisations
autorisation.get('/', AutorisationController.getAllAutorisations);

// Récupérer une autorisation par ID
autorisation.get('/:id', AutorisationController.getAutorisationById);

// Créer une nouvelle autorisation
autorisation.post('/', AutorisationController.createAutorisation);

// Mettre à jour une autorisation existante
autorisation.put('/:id', AutorisationController.updateAutorisation);

// Supprimer une autorisation
autorisation.delete('/:id', AutorisationController.deleteAutorisation);

export default autorisation;

