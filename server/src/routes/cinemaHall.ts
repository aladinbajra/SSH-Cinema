import { Router, Request, Response } from 'express';
import cinemaHall from '../models/cinemaHall';

const router = Router();

// Get all cinemaHalls
router.get('/', async (req: Request, res: Response) => {
  try {
    const cinemaHalls = await cinemaHall.find();
    res.json(cinemaHalls);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Get cinemaHalls by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const cinemaHalls = await cinemaHall.findOne({ id: Number(req.params.id) });
    if (!cinemaHall) {
      return res.status(404).json({ error: 'Cinema Hall not found' });
    }
    res.json(cinemaHall);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new cinemaHall
router.post('/', async (req: Request, res: Response) => {
  const { id, name, location, capacity } = req.body;

  const newCinemaHall = new cinemaHall({
    id,
    name,
    location,
    capacity,
  });

  try {
    const savedCinemaHall = await newCinemaHall.save();
    res.status(201).json(savedCinemaHall);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// Update cinemaHall by ID
router.put('/:id', async (req: Request, res: Response) => {
  const { name, location, capacity } = req.body;

  try {
    const updatedCinemaHall = await cinemaHall.findOneAndUpdate(
      { id: Number(req.params.id) },
      { name, location, capacity },
      { new: true, runValidators: true }
    );
    if (!updatedCinemaHall) {
      return res.status(404).json({ error: 'CinemaHall not found' });
    }
    res.json(updatedCinemaHall);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

// Delete cinemaHall by ID
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const deletedCinemaHall = await cinemaHall.findOneAndDelete({ id: Number(req.params.id) });
    if (!deletedCinemaHall) {
      return res.status(404).json({ error: 'CinemaHall not found' });
    }
    res.json({ message: 'CinemaHall deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
