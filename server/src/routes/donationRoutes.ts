import { Router } from 'express';
import { 
  createDonation, 
  getDonations, 
  updateDonationStatus, 
  getDonationStats,
  donationValidation 
} from '../controllers/donationController';
import { validateRequest } from '../middleware/errorHandler';

const router = Router();

router.post('/create', donationValidation, validateRequest, createDonation);
router.get('/list', getDonations);
router.get('/stats', getDonationStats);
router.put('/:transactionId/status', updateDonationStatus);

export default router;
