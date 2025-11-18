import { db } from "../database/connection.js";

export const listar = async (req, res) => {
  const { carrera } = req.query;

  try {
    if (carrera) {
      const [rows] = await db.query(
        "SELECT * FROM estudiantes WHERE carrera = ?",
        [carrera]
      );
      return res.json(rows);
    }

    const [rows] = await db.query("SELECT * FROM estudiantes");
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const buscarPorId = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM estudiantes WHERE id = ?",
      [req.params.id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "Estudiante no encontrado" });
    }

    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const crear = async (req, res) => {
  try {
    const { nombre, edad, carrera, promedio } = req.body;

    const [result] = await db.query(
      "INSERT INTO estudiantes(nombre, edad, carrera, promedio) VALUES(?, ?, ?, ?)",
      [nombre, edad, carrera, promedio]
    );

    res
      .status(201)
      .json({ id: result.insertId, nombre, edad, carrera, promedio });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const actualizar = async (req, res) => {
  try {
    const { nombre, edad, carrera, promedio } = req.body;

    await db.query(
      "UPDATE estudiantes SET nombre=?, edad=?, carrera=?, promedio=? WHERE id=?",
      [nombre, edad, carrera, promedio, req.params.id]
    );

    res.json({ mensaje: "Estudiante actualizado correctamente" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const eliminar = async (req, res) => {
  try {
    await db.query("DELETE FROM estudiantes WHERE id=?", [req.params.id]);
    res.json({ mensaje: "Estudiante eliminado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const promedioGeneral = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT AVG(promedio) AS promedioGeneral FROM estudiantes"
    );
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
