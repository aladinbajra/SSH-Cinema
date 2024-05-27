import express from 'express';
import {
    createFilm,
    getAllFilms,
    getFilmById,
    updateFilm,
    deleteFilm,
    createFilmByReleaseDate
} from '../controllers/filmController';

const router = express.Router();

router.post('/', createFilm);
router.get('/', getAllFilms);
router.get('/:id', getFilmById);
router.put('/:id', updateFilm);
router.delete('/:id', deleteFilm);
router.post('/byReleaseDate', createFilmByReleaseDate);

export default router;
