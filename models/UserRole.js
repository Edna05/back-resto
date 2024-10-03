import { dbConnect } from '../config/db.js';

const db = dbConnect();

export const UserRoleModel = {
  // Créer un userRole
  create: (userId, roleId, callback) => {
    const query = 'INSERT INTO userRole (user_id, role_id) VALUES (?, ?)';
    const values = [userId, roleId];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Erreur lors de la création de l\'userRole: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Récupérer tous les userRoles
  getAllUserRoles: (callback) => {
    const query = 'SELECT * FROM userRole';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération des userRoles: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Récupérer un userRole par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM userRole WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération de l\'userRole par ID: ', err.message);
        return callback(err, null);
      }
      if (results.length === 0) {
        return callback(null, null); // Aucun résultat trouvé
      }
      callback(null, results[0]); 
    });
  },

  // Mettre à jour un userRole
  update: (id, userId, roleId, callback) => {
    const query = 'UPDATE userRole SET user_id = ?, role_id = ? WHERE id = ?';
    const values = [userId, roleId, id];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Erreur lors de la mise à jour de l\'userRole: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Supprimer un userRole
  delete: (id, callback) => {
    const query = 'DELETE FROM userRole WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Erreur lors de la suppression de l\'userRole: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  }
};
