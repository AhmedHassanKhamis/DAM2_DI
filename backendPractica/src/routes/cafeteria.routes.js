import Router from 'express'
import { checkArticulo, crearPedido, historialAlumno } from '../controllers/cafe.controller.js';


const router = Router();



router.post('/checkArticulo',checkArticulo)
router.post('/historialAlumno',historialAlumno)
router.post('/crearPedido',crearPedido)



export default router