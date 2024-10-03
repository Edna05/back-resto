import { AutorisationModel } from '../models/Autorisation.js';

export const AutorisationController = {
  // Récupérer toutes les autorisations
  getAllAutorisations: (req, res) => {
    AutorisationModel.getAllAutorisations((err, autorisations) => {
      if (err) {
        console.error('Erreur lors de la récupération des autorisations:', err.message);
        res.status(500).json({ message: 'Erreur lors de la récupération des autorisations' });
      } else {
        res.json(autorisations);
      }
    });
  },

  // Récupérer une autorisation par ID
  getAutorisationById: (req, res) => {
    const id = req.params.id;
    AutorisationModel.getById(id, (err, autorisation) => {
      if (err) {
        console.error('Erreur lors de la récupération de l\'autorisation:', err.message);
        res.status(500).json({ message: 'Erreur lors de la récupération de l\'autorisation' });
      } else if (!autorisation) {
        res.status(404).json({ message: 'Autorisation non trouvée' });
      } else {
        res.json(autorisation);
      }
    });
  },

  // Créer une autorisation
  createAutorisation: (req, res) => {
    const { nom } = req.body;
    AutorisationModel.create(nom, (err, result) => {
      if (err) {
        console.error('Erreur lors de la création de l\'autorisation:', err.message);
        res.status(500).json({ message: 'Erreur lors de la création de l\'autorisation' });
      } else {
        res.status(201).json({ message: 'Autorisation créée avec succès', id: result.insertId });
      }
    });
  },

  // Mettre à jour une autorisation
  updateAutorisation: (req, res) => {
    const id = req.params.id;
    const { nom } = req.body;
    AutorisationModel.update(id, nom, (err, result) => {
      if (err) {
        console.error('Erreur lors de la mise à jour de l\'autorisation:', err.message);
        res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'autorisation' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Autorisation non trouvée' });
      } else {
        res.json({ message: 'Autorisation mise à jour avec succès' });
      }
    });
  },

  // Supprimer une autorisation
  deleteAutorisation: (req, res) => {
    const id = req.params.id;
    AutorisationModel.delete(id, (err, result) => {
      if (err) {
        console.error('Erreur lors de la suppression de l\'autorisation:', err.message);
        res.status(500).json({ message: 'Erreur lors de la suppression de l\'autorisation' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Autorisation non trouvée' });
      } else {
        res.json({ message: 'Autorisation supprimée avec succès' });
      }
    });
  }
};
