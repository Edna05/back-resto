import express from 'express';
import { RoleController } from '../controllers/Role.js';

const role = express.Router();

role.get('/role', RoleController.getAllRoles);
role.get('/role/:id', RoleController.getRoleById);
role.post('/role', RoleController.createRole);
role.put('/role/:id', RoleController.updateRole);
role.delete('/role/:id',RoleController.deleteRole);

export default role;