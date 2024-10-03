import express from 'express';
import UserRoleModel from '../models/userRoleModel.js';

const userRoleRouter = express.Router();

// Créer un nouveau lien entre un utilisateur et un rôle
userRoleRouter.post('/', async (req, res) => {
    try {
        const { userId, roleId } = req.body;
 
        if (!userId || !roleId) {
            return res.status(400).json({ error: 'userId et roleId sont requis' });
        }

        const newUserRole = await UserRoleModel.create({ userId, roleId });
        res.status(201).json(newUserRole);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erreur lors de la création du lien utilisateur-rôle' });
    }
});

// Récupérer un userRole par ID
userRoleRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    UserRoleModel.getById(id, (err, userRole) => {
        if (err) {
            console.error('Erreur lors de la récupération de userRole:', err.message);
            res.status(500).json({ message: 'Erreur lors de la récupération de userRole' });
        } else if (!userRole) {
            res.status(404).json({ message: 'UserRole non trouvé' });
        } else {
            res.json(userRole);
        }
    });
});

// Créer un userRole
userRoleRouter.post('/create', (req, res) => {
    const { userId, roleId } = req.body;
    UserRoleModel.create({ userId, roleId }, (err, result) => {
        if (err) {
            console.error('Erreur lors de la création de l\'UserRole:', err.message);
            res.status(500).json({ message: 'Erreur lors de la création de l\'UserRole' });
        } else {
            res.status(201).json({ message: 'UserRole créé avec succès', id: result.insertId });
        }
    });
});

// Mettre à jour un userRole
userRoleRouter.put('/:id', (req, res) => {
    const id = req.params.id;
    const { userId, roleId } = req.body; 

    UserRoleModel.update(id, { userId, roleId }, (err, result) => {
        if (err) {
            console.error('Erreur lors de la mise à jour de userRole:', err.message);
            res.status(500).json({ message: 'Erreur lors de la mise à jour de userRole' });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ message: 'UserRole non trouvé' });
        } else {
            res.json({ message: 'UserRole mis à jour avec succès' });
        }
    });
});

// Supprimer un userRole
userRoleRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    UserRoleModel.delete(id, (err, result) => {
        if (err) {
            console.error('Erreur lors de la suppression de userRole:', err.message);
            res.status(500).json({ message: 'Erreur lors de la suppression de userRole' });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ message: 'UserRole non trouvé' });
        } else {
            res.json({ message: 'UserRole supprimé avec succès' });
        }
    });
});

export default userRoleRouter;
