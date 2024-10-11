import express from 'express';
import { UserRoleController } from '../controllers/UserRole.js';

const userRoleRouter = express.Router();

// Récupérer tous les userRoles
userRoleRouter.get('/', UserRoleController.getAllUserRoles);

// Récupérer un userRole par ID
userRoleRouter.get('/:id', UserRoleController.getUserRoleById);

// Créer un nouveau userRole
userRoleRouter.post('/', UserRoleController.createUserRole);

// Mettre à jour un userRole
userRoleRouter.put('/:id', UserRoleController.updateUserRole);

// Supprimer un userRole
userRoleRouter.delete('/:id', UserRoleController.deleteUserRole);

export default userRoleRouter;

