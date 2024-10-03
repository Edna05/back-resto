import { UserModel } from '../models/User.js';

export const UserController = {
  // Récupérer tous les user
  getAllUsers: (req, res) => {
    UserModel.getAllUsers((err, users) => {
      if (err) {
        console.error('Erreur lors de la récupération des users:', err.message);
        res.status(500).json({ message: 'Erreur lors de la récupération des users' });
      } else {
        res.json(users);
      }
    });
  },

  // Récupérer un user par ID
  getUserById: (req, res) => {
    const id = req.params.id;
    UserModel.getById(id, (err, user) => {
      if (err) {
        console.error('Erreur lors de la récupération de \'user:', err.message);
        res.status(500).json({ message: 'Erreur lors de la récupération de \'user' });
      } else if (!user) {
        res.status(404).json({ message: 'User non trouvé' });
      } else {
        res.json(user);
      }
    });
  },

  // Créer un user
  createUser: (req, res) => {
    const { pseudo, email, motDePasse } = req.body;
    AdministrateurModel.create(pseudo, email, motDePasse, (err, result) => {
      if (err) {
        console.error('Erreur lors de la création de \'user:', err.message);
        res.status(500).json({ message: 'Erreur lors de la création de \'user' });
      } else {
        res.status(201).json({ message: 'User créé avec succès', id: result.insertId });
      }
    });
  },

  // Mettre à jour un user
  updateUser: (req, res) => {
    const id = req.params.id;
    const { pseudo, email, motDePasse } = req.body;
    UserModel.update(id, pseudo, email, motDePasse, (err, result) => {
      if (err) {
        console.error('Erreur lors de la mise à jour de \'user:', err.message);
        res.status(500).json({ message: 'Erreur lors de la mise à jour de \'user' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'User non trouvé' });
      } else {
        res.json({ message: 'User mis à jour avec succès' });
      }
    });
  },

  // Supprimer un user
  deleteUser: (req, res) => {
    const id = req.params.id;
    UserModel.delete(id, (err, result) => {
      if (err) {
        console.error('Erreur lors de la suppression de \'user:', err.message);
        res.status(500).json({ message: 'Erreur lors de la suppression de \'user' });
      } else if (result.affectedRows === 0) {
        res.status(404).json({ message: 'User non trouvé' });
      } else {
        res.json({ message: 'User supprimé avec succès' });
      }
    });
  }
};