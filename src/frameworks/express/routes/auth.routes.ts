import { Router } from 'express';
import authController from '../../../controllers/auth';
import jwt from '../../jsonwebtoken/jwt'
import expressCallback from '../express-callback';
const router = Router();

//router.get('/generateToken',  expressCallback(authController(jwt.generateToken)));
router.post('/singIn',  expressCallback(authController.login));
router.post('/singUp',  expressCallback(authController.register));

export default router;
