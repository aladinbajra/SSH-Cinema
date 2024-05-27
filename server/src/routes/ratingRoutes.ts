import { Router } from 'express';
import {
    getAllRatings,
    getRatingById,
    createRating,
    updateRatingById,
    deleteRatingById
} from '../controllers/ratingController';

const router = Router();

router.get('/ratings', getAllRatings);
router.get('/ratings/:id', getRatingById);
router.post('/ratings', createRating);
router.put('/ratings/:id', updateRatingById);
router.delete('/ratings/:id', deleteRatingById);

export default router;
