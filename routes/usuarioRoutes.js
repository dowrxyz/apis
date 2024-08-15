import express from 'express';
import { crearUsuario } from '../controllers/usuarioController.js';

const router = express.Router();

router.post('/', crearUsuario);

// Otros endpoints como obtenerUsuario, actualizarUsuario, eliminarUsuario pueden ser añadidos aquí

export default router;
