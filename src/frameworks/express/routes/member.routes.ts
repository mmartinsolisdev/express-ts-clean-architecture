import { Router } from 'express';
import memberController from '../../../controllers/member';
import expressCallback from '../express-callback';
import authorize from '../middlewares/validateToken';
const router = Router();

router.get('/getMembers', authorize(['basic', 'admin']), expressCallback(memberController.getMembers));
router.get('/getMember/:id',  authorize(['basic', 'admin']), expressCallback(memberController.getMember));
router.post('/addMember',  authorize(['basic', 'admin']), expressCallback(memberController.addMemb));
router.put('/updateMember/:id', authorize(['admin']), expressCallback(memberController.updateMember));

export default router;
