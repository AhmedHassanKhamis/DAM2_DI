import { Router } from 'express';
import { task } from '../controllers/tasks.controllers.js';


const router = Router();



router.post('/crear_tarea',task);


export default router;