import express from 'express';
import { crearConductor } from '../controllers/conductorController.js';

const router = express.Router();

router.post('/', crearConductor);

// Definir una ruta GET para obtener todos los conductores
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM conductores');
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
