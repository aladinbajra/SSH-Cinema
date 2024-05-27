import { Router } from 'express';
import {
    createGenre,
    getAllGenres,
    getGenreById,
    updateGenre,
    deleteGenre
} from '../controllers/genreController';

const router = Router();

router.post('/genres', createGenre);
router.get('/genres', getAllGenres);
router.get('/genres/:id', getGenreById);
router.put('/genres/:id', updateGenre);
router.delete('/genres/:id', deleteGenre);

export default router;
