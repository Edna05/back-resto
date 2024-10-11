import express from 'express';
import { UserController } from '../controllers/User.js';

const user = express.Router();

// Récupérer tous les administrateurs
user.get('/', UserController.getAllUsers);

// Récupérer un administrateur par ID
user.get('/:id', UserController.getUserById);

// Créer un nouvel administrateur
user.post('/', UserController.createUser);

// Mettre à jour un administrateur existant
user.put('/:id', UserController.updateUser);

// Supprimer un administrateur
user.delete('/:id', UserController.deleteUser);



export default user;

