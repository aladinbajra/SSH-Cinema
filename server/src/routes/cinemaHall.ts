import { Router } from 'express';
import {
  getAllCinemaHalls,
  getCinemaHallById,
  createCinemaHall,
  updateCinemaHall,
  deleteCinemaHall,
  getCinemaHallByCapacity
} from '../controllers/cinemaHallController';

const router = Router();

router.get('/cinemaHalls', getAllCinemaHalls);
router.get('/cinemaHalls/:id', getCinemaHallById);
router.post('/cinemaHalls', createCinemaHall);
router.put('/cinemaHalls/:id', updateCinemaHall);
router.delete('/cinemaHalls/:id', deleteCinemaHall);
router.get('/cinemaHalls/capacity/:capacity', getCinemaHallByCapacity);

export default router;
