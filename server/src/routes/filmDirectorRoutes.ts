import { Router } from 'express';
import {
    createFilmDirector,
    getAllFilmDirectors,
    getFilmDirectorById,
    updateFilmDirector,
    deleteFilmDirector
} from '../controllers/filmDirectorController';

const router = Router();

router.post('/filmDirectors', createFilmDirector);
router.get('/filmDirectors', getAllFilmDirectors);
router.get('/filmDirectors/:id', getFilmDirectorById);
router.put('/filmDirectors/:id', updateFilmDirector);
router.delete('/filmDirectors/:id', deleteFilmDirector);

export default router;
