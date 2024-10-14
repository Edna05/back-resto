import express from 'express';
import { ReservationsController } from './controllers/ReservationController.js';

const ReservationRoute = express.Router();

// Route pour récupérer toutes les réservations
reservation.get('/reservations', getAllReservations);

// Route pour récupérer une réservation par ID
reservation.get('/reservations/:idReservation', getReservationById);

// Route pour créer une nouvelle réservation
reservation.post('/reservations', createReservation);

// Route pour mettre à jour une réservation
reservation.put('/reservations/:idReservation', updateReservation);

// Route pour supprimer une réservation
reservation.delete('/reservations/:idReservation', deleteReservation);

export default ReservationRoute;
