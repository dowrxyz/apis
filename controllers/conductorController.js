import { pool } from '../index.js';

export const crearConductor = async (req, res) => {
  const { nombre, email, password, vehiculo } = req.body;

  try {
    const [result] = await pool.query(
      'INSERT INTO conductores (nombre, email, password, vehiculo) VALUES (?, ?, ?, ?)',
      [nombre, email, password, vehiculo]
    );
    res.status(201).json({ id: result.insertId, nombre, email, vehiculo });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
