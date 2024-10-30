import { Router } from "express";
import { actualizarLibro, borrarLibro, buscarLibro, crearLibro } from "../controllers/Libro.controller.js";

const router = Router();


router.post("/crearLibro", crearLibro);
router.post("/buscarLibro", buscarLibro);
router.post("/borrarLibro", borrarLibro);
router.post("/actualizarLibro", actualizarLibro);


export default router;