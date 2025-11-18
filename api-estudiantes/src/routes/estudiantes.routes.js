const express = require("express");
const router = express.Router();

// "BD" en memoria + SEED
let estudiantes = [
  { id: 1, nombre: "Ana",  edad: 20, correo: "ana@mail.com" },
  { id: 2, nombre: "Luis", edad: 22, correo: "luis@mail.com" }
];
let nextId = 3;

// GET /estudiantes
router.get("/", (_req, res) => res.json(estudiantes));

// POST /estudiantes
router.post("/", (req, res) => {
  const { nombre, edad, correo } = req.body || {};
  if (!nombre || !edad || !correo) {
    return res.status(400).json({ error: "Faltan datos: nombre, edad, correo" });
  }
  const nuevo = { id: nextId++, nombre, edad, correo };
  estudiantes.push(nuevo);
  res.status(201).json(nuevo);
});

// PUT /estudiantes/:id
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const est = estudiantes.find(e => e.id === id);
  if (!est) return res.status(404).json({ error: "No encontrado" });

  const { nombre, edad, correo } = req.body || {};
  if (nombre !== undefined) est.nombre = nombre;
  if (edad !== undefined)   est.edad   = edad;
  if (correo !== undefined) est.correo = correo;

  res.json(est);
});

// DELETE /estudiantes/:id
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);
  const len = estudiantes.length;
  estudiantes = estudiantes.filter(e => e.id !== id);
  if (len === estudiantes.length) return res.status(404).json({ error: "No encontrado" });
  res.status(204).send();
});

module.exports = router;
