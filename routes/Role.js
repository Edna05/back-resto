import express from 'express';
import { RoleController } from '../controllers/Role.js';

const role = express.Router();

// Récupérer tous les rôles
role.get('/', RoleController.getAllRoles);

// Récupérer un rôle par ID
role.get('/:id', RoleController.getRoleById);

// Créer un nouveau rôle
role.post('/', RoleController.createRole);

// Mettre à jour un rôle existant
role.put('/:id', RoleController.updateRole);

// Supprimer un rôle
role.delete('/:id', RoleController.deleteRole);

export default role;
