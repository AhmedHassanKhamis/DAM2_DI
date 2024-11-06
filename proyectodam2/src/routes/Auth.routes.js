import { Router } from 'express';
import { register, login, update, remove, search } from '../controllers/auth.controllers.js' 

const router = Router();


router.post('/register',register);
router.post('/login',login);
router.post('/update',update);
router.post('/remove',remove);
router.get('/search',search);



export default router;