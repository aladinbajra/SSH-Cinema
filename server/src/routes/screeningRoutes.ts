import { Router } from 'express';
import {
    getAllScreenings,
    getScreeningById,
    createScreening,
    updateScreeningById,
    updateScreeningByMovieAndTheaterId,
    deleteScreeningById,
    deleteScreeningByMovieAndTheaterId
} from '../controllers/screeningController';

const router = Router();

router.get('/screenings', getAllScreenings);
router.get('/screenings/:id', getScreeningById);
router.post('/screenings', createScreening);
router.put('/screenings/:id', updateScreeningById);
router.put('/screenings/:movieId/:theaterId', updateScreeningByMovieAndTheaterId);
router.delete('/screenings/:id', deleteScreeningById);
router.delete('/screenings/:movieId/:theaterId', deleteScreeningByMovieAndTheaterId);

export default router;
