import express from 'express';
import ReservationRoute from './routes/ReservationRoute.js'; 

const app = express();
app.use(express.json()); 

// Utilisation des routes
app.use('/api', ReservationRoute); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` je fonctionne bien au ${PORT}`);
});
