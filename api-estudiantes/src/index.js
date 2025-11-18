const express = require("express");
const authRoutes = require("./routes/auth.routes");
const estudiantesRoutes = require("./routes/estudiantes.routes");
const auth = require("./middleware/auth");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Salud
app.get("/", (_req, res) => res.send("✅ API de Estudiantes con JWT funcionando"));

// Rutas públicas
app.use("/auth", authRoutes);

// Rutas protegidas
app.use("/estudiantes", auth, estudiantesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor: http://localhost:${PORT}`);
  console.log(`Login (POST): http://localhost:${PORT}/auth/login`);
  console.log(`Estudiantes (GET): http://localhost:${PORT}/estudiantes`);
});
