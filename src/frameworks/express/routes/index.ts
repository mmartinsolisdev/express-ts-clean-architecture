import { Router } from 'express';
import member from './member.routes';
import auth from './auth.routes';

const router = Router();

// Members route
router.use('/members', member);
// Auth route
router.use('/auth', auth);

export default router;
