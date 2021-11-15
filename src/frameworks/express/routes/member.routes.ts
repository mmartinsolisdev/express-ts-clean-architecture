import { Router } from 'express';
import memberController from '../../../controllers/member';
import expressCallback from '../express-callback';
import validateToken from '../middlewares/validateToken'
const router = Router();

router.get('/getMembers', expressCallback(memberController.getMembers));
router.get('/getMember/:id', expressCallback(memberController.getMember));
router.post('/addMember', expressCallback(memberController.addMemb));
router.put('/updateMember/:id', expressCallback(memberController.updateMember));

export default router;
