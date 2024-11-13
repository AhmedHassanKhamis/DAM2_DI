import Router from 'express'
import { crearPelicula, listarPeliculas } from '../controllers/pelicula.controller.js';


const router = Router();



router.post('/crearPelicula',crearPelicula)
router.get('/listarPeliculas',listarPeliculas)



export default router