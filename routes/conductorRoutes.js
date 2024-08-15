import express from 'express';
import { crearConductor } from '../controllers/conductorController.js';

const router = express.Router();

router.post('/', crearConductor);

// Otros endpoints como obtenerConductor, actualizarConductor, eliminarConductor pueden ser añadidos aquí

export default router;
