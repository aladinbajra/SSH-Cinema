import { Request, Response } from 'express';
import cinemaHall from '../models/cinemaHall';


export const getAllCinemaHalls = async (req: Request, res: Response): Promise<void> => {
  try {
    const cinemaHalls = await cinemaHall.find();
    res.json(cinemaHalls);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Get cinemaHall by ID
export const getCinemaHallById = async (req: Request, res: Response): Promise<void> => {
  try {
    const cinemaHallData = await cinemaHall.findOne({ id: Number(req.params.id) });
    if (!cinemaHallData) {
      res.status(404).json({ error: 'Cinema Hall not found' });
      return;
    }
    res.json(cinemaHallData);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};


export const createCinemaHall = async (req: Request, res: Response): Promise<void> => {
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
};


export const updateCinemaHall = async (req: Request, res: Response): Promise<void> => {
  const { name, location, capacity } = req.body;

  try {
    const updatedCinemaHall = await cinemaHall.findOneAndUpdate(
      { id: Number(req.params.id) },
      { name, location, capacity },
      { new: true, runValidators: true }
    );
    if (!updatedCinemaHall) {
      res.status(404).json({ error: 'CinemaHall not found' });
      return;
    }
    res.json(updatedCinemaHall);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};


export const deleteCinemaHall = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedCinemaHall = await cinemaHall.findOneAndDelete({ id: Number(req.params.id) });
    if (!deletedCinemaHall) {
      res.status(404).json({ error: 'CinemaHall not found' });
      return;
    }
    res.json({ message: 'CinemaHall deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};



export const getCinemaHallByCapacity = async (req: Request, res: Response): Promise<void> => {
  try {
    const { capacity } = req.params;
    const cinemaHalls = await cinemaHall.find({ capacity: Number(capacity) });
    res.json(cinemaHalls);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
