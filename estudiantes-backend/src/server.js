import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import estudiantesRoutes from "./routes/estudiantes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ENDPOINTS PRINCIPALES DE LA API
app.use("/estudiantes", estudiantesRoutes);

// OPCIONAL: MENSAJE EN LA RAÍZ ( / )
app.get("/", (req, res) => {
  res.json({
    mensaje: "API de Sistema de Gestión de Estudiantes desplegada en Render",
    autor: "BRAVO AVILA ADRIAN ALEJANDRO",
    ejemplos: {
      listar: "/estudiantes",
      filtroPorCarrera: "/estudiantes?carrera=Software",
      promedioGeneral: "/estudiantes/promedio-general"
    }
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor en puerto ${port}`);
});
