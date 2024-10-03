import { dbConnect } from '../config/db.js';

const db = dbConnect();

export const UserModel = {
  // Créer un user
  create: (pseudo, email, motDePasse, callback) => {
    const query = 'INSERT INTO user (pseudo, email, motDePasse) VALUES (?, ?, ? )';
    const values = [pseudo, email, motDePasse];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Erreur lors de la création de l\'user: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Récupérer tous les user
  getAllUsers: (callback) => {
    const query = 'SELECT * FROM user';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération des users: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Récupérer un user par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM user WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération de \'user par ID: ', err.message);
        return callback(err, null);
      }
      callback(null, results[0]); // Renvoie uniquement le premier résultat
    });
  },

  // Mettre à jour un user
  update: (id,pseudo, email, motDePasse, callback) => {
    const query = 'UPDATE administrateur SET pseudo = ?, email = ?, motDePasse = ? WHERE id = ?';
    const values = [pseudo, email, motDePasse, id];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Erreur lors de la mise à jour de l\'user: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Supprimer un user
  delete: (id, callback) => {
    const query = 'DELETE FROM user WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Erreur lors de la suppression de \'user: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  }
};

  
  