import express from 'express';
import { UserController } from '../controllers/User.js';

const user = express.Router();

user.get('/administrateur', UserController.getAllUsers);
user.get('/administrateur/:id', UserController.getUserById);
user.post('/administrateur', UserController.createUser);
user.put('/administrateur/:id', UserController.updateUser);
user.delete('/administrateur/:id', UserController.deleteUser);

export default user;
