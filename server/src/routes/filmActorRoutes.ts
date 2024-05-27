import { Router } from 'express';
import {
    createFilmActor,
    getAllFilmActors,
    getFilmActorById,
    deleteFilmActor
} from '../controllers/filmActorController';

const router = Router();

router.post('/filmActors', createFilmActor);
router.get('/filmActors', getAllFilmActors);
router.get('/filmActors/:id', getFilmActorById);
router.delete('/filmActors/:id', deleteFilmActor);

export default router;
