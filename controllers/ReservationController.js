import { ReservationsModel } from './models/ReservationModel.js'; // Import du modèle

export const ReservationsController = {
  
  // Récupérer toutes les réservations
  getAllReservations: (req, res) => {
    ReservationsModel.getAllReservations((err, reservations) => {
      if (err) {
        return res.status(500).json({ error: 'Erreur lors de la récupération des réservations.' });
      }
      res.status(200).json(reservations);
    });
  },

  // Récupérer une réservation par ID
  getReservationById: (req, res) => {
    const { idReservation } = req.params;
    ReservationsModel.getById(idReservation, (err, reservation) => {
      if (err) {
        return res.status(500).json({ error: 'Erreur lors de la récupération de la réservation.' });
      }
      if (!reservation) {
        return res.status(404).json({ error: 'Réservation non trouvée.' });
      }
      res.status(200).json(reservation);
    });
  },

  // Créer une nouvelle réservation
  createReservation: (req, res) => {
    const { nomClient, dateTime, nombrePersonne, email } = req.body;
    ReservationsModel.create(nomClient, idPlat, dateTime, nombrePersonne, email, (err, newReservation) => {
      if (err) {
        return res.status(500).json({ error: 'Erreur lors de la création de la réservation.' });
      }
      res.status(201).json(newReservation);
    });
  },

  // Mettre à jour une réservation
  updateReservation: (req, res) => {
    const { idReservation } = req.params;
    const { nomClient, dateTime, nombrePersonne, email } = req.body;
    ReservationsModel.update(idReservation, nomClient, dateTime, nombrePersonne, email, (err, updatedReservation) => {
      if (err) {
        return res.status(500).json({ error: 'Erreur lors de la mise à jour de la réservation.' });
      }
      res.status(200).json(updatedReservation);
    });
  },

  // Supprimer une réservation
  deleteReservation: (req, res) => {
    const { idReservation } = req.params;
    const { email, nomClient } = req.body; // On récupère l'email et le nomClient pour l'envoi de l'email de suppression
    ReservationsModel.delete(idReservation, (err) => {
      if (err) {
        return res.status(500).json({ error: 'Erreur lors de la suppression de la réservation.' });
      }
      res.status(200).json({ message: 'Réservation supprimée avec succès.' });
    });
  },
};
