
const adminModel = require('../models/adminModel');

class AdminController {
    async register(req, res) {
        const { nom, mail, mot_de_pass } = req.body;
        try {
            await adminModel.register(nom, mail, mot_de_pass);
            res.status(201).json({ message: 'Inscription réussie!' });
        } catch (error) {
            res.status(500).json({ message: 'Échec de l\'inscription.' });
        }
    }

    async authenticate(req, res) {
        const { mail, mot_de_pass } = req.body;
        const admin = await adminModel.authenticate(mail, mot_de_pass);
        if (admin) {
            res.status(200).json({ message: 'Connexion réussie!', admin });
        } else {
            res.status(401).json({ message: 'Échec de la connexion.' });
        }
    }
}

module.exports = new AdminController();
