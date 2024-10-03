import { dbConnect } from '../config/db.js';

const db = dbConnect();

export const RoleModel = {
  // Créer un role
  create: (nom,callback) => {
    const query = 'INSERT INTO administrateur (nom) VALUES (?)';
    const values = [nom];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Erreur lors de la création de \'role: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Récupérer tous les role
  getAllRoles: (callback) => {
    const query = 'SELECT * FROM role';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération des roles: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Récupérer un role par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM role WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération de \'role par ID: ', err.message);
        return callback(err, null);
      }
      callback(null, results[0]); // Renvoie uniquement le premier résultat
    });
  },

  // Mettre à jour un role
  update: (id, nom,  callback) => {
    const query = 'UPDATE role SET nom = ?, WHERE id = ?';
    const values = [nom, id];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Erreur lors de la mise à jour de \'role: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Supprimer un role
  delete: (id, callback) => {
    const query = 'DELETE FROM role WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Erreur lors de la suppression du \'role: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  }
};