import { Request, Response } from 'express';
import Screening from '../models/screening';

// Get all screenings
export const getAllScreenings = async (req: Request, res: Response): Promise<void> => {
    try {
        const screenings = await Screening.find();
        res.json(screenings);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get screening by ID
export const getScreeningById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const screening = await Screening.findById(id);
        if (!screening) {
            res.status(404).json({ message: 'Screening not found' });
            return;
        }
        res.json(screening);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new screening
export const createScreening = async (req: Request, res: Response): Promise<void> => {
    const { movieId, theaterId, screeningTime, availableSeats } = req.body;
    try {
        const newScreening = new Screening({ movieId, theaterId, screeningTime, availableSeats });
        const savedScreening = await newScreening.save();
        res.status(201).json(savedScreening);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// Update a screening by ID
export const updateScreeningById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { movieId, theaterId, screeningTime, availableSeats } = req.body;
    try {
        const updatedScreening = await Screening.findByIdAndUpdate(
            id,
            { movieId, theaterId, screeningTime, availableSeats },
            { new: true }
        );
        if (!updatedScreening) {
            res.status(404).json({ message: 'Screening not found' });
            return;
        }
        res.json(updatedScreening);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// Update a screening by movieId and theatreId
export const updateScreeningByMovieAndTheaterId = async (req: Request, res: Response): Promise<void> => {
    const { movieId, theaterId } = req.params;
    const { screeningTime, availableSeats } = req.body;
    try {
        const updatedScreening = await Screening.findOneAndUpdate(
            { movieId, theaterId },
            { screeningTime, availableSeats },
            { new: true }
        );
        if (!updatedScreening) {
            res.status(404).json({ message: 'Screening not found' });
            return;
        }
        res.json(updatedScreening);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a screening by ID
export const deleteScreeningById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const deletedScreening = await Screening.findByIdAndDelete(id);
        if (!deletedScreening) {
            res.status(404).json({ message: 'Screening not found' });
            return;
        }
        res.json({ message: 'Screening deleted successfully' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a screening by movieId and theatreId
export const deleteScreeningByMovieAndTheaterId = async (req: Request, res: Response): Promise<void> => {
    const { movieId, theaterId } = req.params;
    try {
        const deletedScreening = await Screening.findOneAndDelete({ movieId, theaterId });
        if (!deletedScreening) {
            res.status(404).json({ message: 'Screening not found' });
            return;
        }
        res.json({ message: 'Screening deleted successfully' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
