import express from 'express';
import { crearViaje } from '../controllers/viajeController.js';

const router = express.Router();

router.post('/', crearViaje);

// Otros endpoints como obtenerViaje, actualizarViaje, eliminarViaje pueden ser añadidos aquí

export default router;
