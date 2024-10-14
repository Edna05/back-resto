import { dbConnect } from '../config/db.js';
import { sendEmail } from '../msg/mailer.js'; 

const db = dbConnect();

export const ReservationsModel = {
  // Créer une réservation
  create: (nomClient, idPlat, dateTime, nombrePersonne, email, callback) => {
    const newReservation = new Reservation(Date.now(), nomClient, dateTime, nombrePersonne, email);
    const query = 'INSERT INTO reservation (idReservation, nomClient, idPlat, dateTime, nombrePersonne, email) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [newReservation.idReservation, newReservation.nomClient, newReservation.idPlat, newReservation.dateTime, newReservation.nombrePersonne, newReservation.email];

    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Erreur lors de la création de la réservation: ', err.message);
        return callback(err, null);
      }

      // Envoi d'un email de confirmation de réservation
      const subject = 'Confirmation de réservation';
      const text = `Bonjour ${nomClient},\n\nVotre réservation est confirmée pour ${nombrePersonne} personnes le ${dateTime}.\nMerci de réserver avec nous.\n\nCordialement, L'équipe du restaurant`;

      sendEmail(email, subject, text); // Envoi de l'email

      callback(null, results);
    });
  },

  // Récupérer toutes les réservations
  getAllReservations: (callback) => {
    const query = 'SELECT * FROM reservation';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération des réservations: ', err.message);
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  // Récupérer une réservation par ID
  getById: (idReservation, callback) => {
    const query = 'SELECT * FROM reservation WHERE idReservation = ?';
    db.query(query, [idReservation], (err, results) => {
      if (err) {
        console.error('Erreur lors de la récupération de la réservation par ID: ', err.message);
        return callback(err, null);
      }
      if (results.length === 0) {
        return callback(null, null); // Aucune réservation trouvée
      }
      callback(null, results[0]);
    });
  },

  // Mettre à jour une réservation
  update: (idReservation, nomClient, idPlat, dateTime, nombrePersonne, email, callback) => {
    const query = 'UPDATE reservation SET nomClient = ?, idPlat = ?, dateTime = ?, nombrePersonne = ?, email = ? WHERE idReservation = ?';
    const values = [nomClient, dateTime, nombrePersonne, email, idReservation];

    db.query(query, values, (err, results) => {
      if (err) {
        console.error('Erreur lors de la mise à jour de la réservation: ', err.message);
        return callback(err, null);
      }

      // Envoi d'un email de mise à jour de réservation
      const subject = 'Mise à jour de réservation';
      const text = `Bonjour ${nomClient},\n\nVotre réservation a été mise à jour avec succès pour ${nombrePersonne} personnes le ${dateTime}.\nMerci de réserver avec nous.\n\nCordialement, L'équipe du restaurant`;

      sendEmail(email, subject, text); // Envoi de l'email de mise à jour

      callback(null, results);
    });
  },

  // Supprimer une réservation
  delete: (idReservation, email, nomClient, callback) => {
    const query = 'DELETE FROM reservation WHERE idReservation = ?';

    db.query(query, [idReservation], (err, results) => {
      if (err) {
        console.error('Erreur lors de la suppression de la réservation: ', err.message);
        return callback(err, null);
      }

      // Envoi d'un email d'annulation de réservation
      const subject = 'Annulation de réservation';
      const text = `Bonjour ${nomClient},\n\nVotre réservation a été annulée avec succès.\nMerci de votre compréhension.\n\nCordialement, L'équipe du restaurant`;

      sendEmail(email, subject, text); // Envoi de l'email d'annulation

      callback(null, results);
    });
  }
};
