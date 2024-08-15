import { pool } from '../index.js';

export const crearViaje = async (req, res) => {
  const { usuario_id, conductor_id, origen, destino } = req.body;

  try {
    const [result] = await pool.query(
      'INSERT INTO viajes (usuario_id, conductor_id, origen, destino) VALUES (?, ?, ?, ?)',
      [usuario_id, conductor_id, origen, destino]
    );
    res.status(201).json({ id: result.insertId, usuario_id, conductor_id, origen, destino });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Otros métodos como obtenerViaje, actualizarViaje, eliminarViaje pueden ser añadidos aquí
