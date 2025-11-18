import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import estudiantesRoutes from "./routes/estudiantes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Rutas principales de estudiantes
app.use("/estudiantes", estudiantesRoutes);

// Ruta raíz solo para información (Render / navegador)
app.get("/", (req, res) => {
  res.json({
    mensaje: "API de Sistema de Gestión de Estudiantes (BRAVO AVILA ADRIAN)",
    descripcion: "Backend Node.js + Express + MySQL desplegado en Render.",
    endpoints: {
      listar: "/estudiantes",
      crear: "/estudiantes",
      detalle: "/estudiantes/:id",
      actualizar: "/estudiantes/:id",
      eliminar: "/estudiantes/:id",
      filtroPorCarrera: "/estudiantes?carrera=Software",
      promedioGeneral: "/estudiantes/promedio-general"
    }
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
