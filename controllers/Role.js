import { RoleModel } from '../models/Role.js';

export const RoleController = {
  // Récupérer tous les roles
  getAllRoles: (req, res) => {
    RoleModel.getAllRoles((err, roles) => {
      if (err) {
        console.error('Erreur lors de la récupération des roles:', err.message);
        res.status(500).json({ message: 'Erreur lors de la récupération des roles' });
      } else {
        res.json(roles);
      }
    });
  },

  // Récupérer un role par ID
  getRoleById: (req, res) => {
    const id = req.params.id;
    RoleModel.getById(id, (err,role) => {
      if (err) {
        console.error('Erreur lors de la récupération de \'role:', err.message);
        res.status(500).json({ message: 'Erreur lors de la récupération de \'role' });
      } else if (!role) {
        res.status(404).json({ message: 'Role non trouvé' });
      } else {
        res.json(role);
      }
    });
  },

  // Créer un role
  createRole: (req, res) => {
    const { nom, } = req.body;
    AdministrateurModel.create(nom, (err, result) => {
      if (err) {
        console.error('Erreur lors de la création de \'Role:', err.message);
        res.status(500).json({ message: 'Erreur lors de la création de \'Role' });
      } else {
        res.status(201).json({ message: 'Role créé avec succès', id: result.insertId });
      }
    });
  },

  // Mettre à jour un role
  updateRole: (req, res) => {
    const id = req.params.id;
    const { nom, } = req.body;
    RoleModel.update(id, nom,  (err, result) => {
      if (err) {
        console.error('Erreur lors de la mise à jour de \'role:', err.message);
        res.status(500).json({ message: 'Erreur lors de la mise à jour de \'role' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Role non trouvé' });
      } else {
        res.json({ message: 'Role mis à jour avec succès' });
      }
    });
  },

  // Supprimer un role
  deleteRole: (req, res) => {
    const id = req.params.id;
    RoleModel.delete(id, (err, result) => {
      if (err) {
        console.error('Erreur lors de la suppression de \'Role:', err.message);
        res.status(500).json({ message: 'Erreur lors de la suppression de \'Role' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'Role non trouvé' });
      } else {
        res.json({ message: 'Role supprimé avec succès' });
      }
    });
  }
};