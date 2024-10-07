import { Router } from 'express';
import { register, login, updateUser } from '../controllers/auth.controllers.js' 

const router = Router();


router.post('/register',register);
router.post('/login',login);
router.post('/update_user',updateUser);


export default router;