import { dbConnect } from '../config/db.js';

const db = dbConnect();

export const AutorisationModel = {
  // Créer une autorisation
  create: (nom, callback) => {
    const query = 'INSERT INTO autorisation (nom) VALUES (?)';
    const values = [nom];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Erreur lors de la création de l\'autorisation: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Récupérer toutes les autorisations
  getAllAutorisations: (callback) => {
    const query = 'SELECT * FROM autorisation';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération des autorisations: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Récupérer une autorisation par ID
  getById: (id, callback) => {
    const query = 'SELECT * FROM autorisation WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération de l\'autorisation par ID: ', err.message);
        return callback(err, null);
      }
      if (results.length === 0) {
        return callback(null, null); // Aucun résultat trouvé
      }
      callback(null, results[0]); // Renvoie uniquement le premier résultat
    });
  },

  // Mettre à jour une autorisation
  update: (id, nom, callback) => {
    const query = 'UPDATE autorisation SET nom = ? WHERE id = ?';
    const values = [nom, id];
    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Erreur lors de la mise à jour de l\'autorisation: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Supprimer une autorisation
  delete: (id, callback) => {
    const query = 'DELETE FROM autorisation WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        console.error('Erreur lors de la suppression de l\'autorisation: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  }
};
