import express from "express";
import {
  listar,
  buscarPorId,
  crear,
  actualizar,
  eliminar,
  promedioGeneral
} from "../controllers/estudiantesController.js";

const router = express.Router();

router.get("/", listar);
router.get("/promedio-general", promedioGeneral);
router.get("/:id", buscarPorId);
router.post("/", crear);
router.put("/:id", actualizar);
router.delete("/:id", eliminar);

export default router;
