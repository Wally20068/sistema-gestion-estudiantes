const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const router = express.Router();

// Usuario demo
const DEMO = { username: "admin", password: "123456", role: "admin" };

// POST /auth/login
router.post("/login", (req, res) => {
  const { username, password } = req.body || {};
  if (username === DEMO.username && password === DEMO.password) {
    const token = jwt.sign(
      { sub: username, role: DEMO.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES || "2h" }
    );
    return res.json({ ok: true, token });
  }
  return res.status(401).json({ ok: false, error: "Credenciales inválidas" });
});

module.exports = router;
