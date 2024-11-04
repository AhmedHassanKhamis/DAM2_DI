import { Router } from "express";
import { actualizarTarea, borrarTarea, buscarTarea, crearTarea } from "../controllers/tasks.controllers.js";


const router = Router();

router.post("/crearTarea",crearTarea)
router.post("/buscarTarea", buscarTarea);
router.post("/borrarTarea", borrarTarea);
router.post("/actualizarTarea", actualizarTarea);



export default router;