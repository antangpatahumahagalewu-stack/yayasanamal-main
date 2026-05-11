import { Router } from 'express';
import { handleChat } from '../controllers/chatController';
import { chatRateLimitMiddleware } from '../middleware/security';

const router = Router();

router.post('/', chatRateLimitMiddleware, handleChat);

export default router;
