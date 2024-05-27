import { Router } from 'express';
import {
    getAllReviews,
    getReviewById,
    createReview,
    updateReviewById,
    deleteReviewById
} from '../controllers/reviewController';

const router = Router();

router.get('/reviews', getAllReviews);
router.get('/reviews/:id', getReviewById);
router.post('/reviews', createReview);
router.put('/reviews/:id', updateReviewById);
router.delete('/reviews/:id', deleteReviewById);

export default router;
