import { pool } from '../index.js';

export const crearUsuario = async (req, res) => {
  const { nombre, email, password } = req.body;

  try {
    const [result] = await pool.query(
      'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)',
      [nombre, email, password]
    );
    res.status(201).json({ id: result.insertId, nombre, email });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Otros métodos como obtenerUsuario, actualizarUsuario, eliminarUsuario pueden ser añadidos aquí
