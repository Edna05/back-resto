import express from 'express';
import adminController from '../controllers/adminController.js';

const router = express.Router();

router.post('/register', adminController.register);
router.post('/login', adminController.authenticate);

export default router;
