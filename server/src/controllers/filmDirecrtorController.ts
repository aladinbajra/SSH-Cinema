import { Request, Response } from 'express';
import FilmDirector, { IFilmDirector } from '../models/filmDirector';

// Create a new film director
export const createFilmDirector = async (req: Request, res: Response): Promise<void> => {
    try {
        const { directorId, movieId } = req.body;
        const newFilmDirector: IFilmDirector = new FilmDirector({ directorId, movieId });
        const savedFilmDirector = await newFilmDirector.save();
        res.status(201).json(savedFilmDirector);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// Get all film directors
export const getAllFilmDirectors = async (req: Request, res: Response): Promise<void> => {
    try {
        const filmDirectors = await FilmDirector.find();
        res.json(filmDirectors);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific film director by ID
export const getFilmDirectorById = async (req: Request, res: Response): Promise<void> => {
    try {
        const filmDirector = await FilmDirector.findById(req.params.id);
        if (filmDirector) {
            res.json(filmDirector);
        } else {
            res.status(404).json({ message: 'FilmDirector not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Update a film director
export const updateFilmDirector = async (req: Request, res: Response): Promise<void> => {
    try {
        const { directorId, movieId } = req.body;
        const updatedFilmDirector = await FilmDirector.findByIdAndUpdate(req.params.id, { directorId, movieId }, { new: true });
        if (updatedFilmDirector) {
            res.json(updatedFilmDirector);
        } else {
            res.status(404).json({ message: 'FilmDirector not found' });
        }
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a film director
export const deleteFilmDirector = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedFilmDirector = await FilmDirector.findByIdAndDelete(req.params.id);
        if (deletedFilmDirector) {
            res.json({ message: 'FilmDirector deleted successfully' });
        } else {
            res.status(404).json({ message: 'FilmDirector not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
