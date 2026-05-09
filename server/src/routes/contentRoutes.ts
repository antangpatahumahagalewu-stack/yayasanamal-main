import { Router } from 'express';
import { getPrograms, getProgramById, getNews, getNewsById, getGallery, getFAQs } from '../controllers/contentController';

const router = Router();

router.get('/programs', getPrograms);
router.get('/programs/:id', getProgramById);
router.get('/news', getNews);
router.get('/news/:id', getNewsById);
router.get('/gallery', getGallery);
router.get('/faqs', getFAQs);

export default router;
