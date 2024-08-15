import express from 'express';
import dotenv from 'dotenv';
import usuarioRoutes from './routes/usuarioRoutes.js';
import conductorRoutes from './routes/conductorRoutes.js';
import viajeRoutes from './routes/viajeRoutes.js';
import mysql from 'mysql2/promise';

dotenv.config();

export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

const app = express();
app.use(express.json());

// Define las rutas
app.use('/usuarios', usuarioRoutes);
app.use('/conductores', conductorRoutes);
app.use('/viajes', viajeRoutes);

app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Uber Clone');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
