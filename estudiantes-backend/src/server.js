import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import estudiantesRoutes from "./routes/estudiantes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/estudiantes", estudiantesRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
