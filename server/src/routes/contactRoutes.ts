import { Router } from 'express';
import { submitContact, getContacts, contactValidation } from '../controllers/contactController';
import { validateRequest } from '../middleware/errorHandler';

const router = Router();

router.post('/submit', contactValidation, validateRequest, submitContact);
router.get('/list', getContacts);

export default router;
