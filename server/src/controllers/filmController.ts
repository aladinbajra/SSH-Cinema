import { Request, Response } from 'express';
import Film, { IFilm } from '../models/film';

// Create a new film
export const createFilm = async (req: Request, res: Response): Promise<void> => {
    const { title, director, releaseDate, genres } = req.body;

    const newFilm: IFilm = new Film({
        title,
        director,
        releaseDate,
        genres,
    });

    try {
        const savedFilm = await newFilm.save();
        res.status(201).json(savedFilm);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// Get all films
export const getAllFilms = async (req: Request, res: Response): Promise<void> => {
    try {
        const films = await Film.find();
        res.json(films);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get a film by ID
export const getFilmById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
        const film = await Film.findById(id);
        if (!film) {
            res.status(404).json({ message: 'Film not found' });
        } else {
            res.json(film);
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Update a film
export const updateFilm = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { title, director, releaseDate, genres } = req.body;

    try {
        const updatedFilm = await Film.findByIdAndUpdate(id, {
            title,
            director,
            releaseDate,
            genres,
        }, { new: true });
        if (!updatedFilm) {
            res.status(404).json({ message: 'Film not found' });
        } else {
            res.json(updatedFilm);
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a film
export const deleteFilm = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
        const deletedFilm = await Film.findByIdAndDelete(id);
        if (!deletedFilm) {
            res.status(404).json({ message: 'Film not found' });
        } else {
            res.json({ message: 'Film deleted' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Create a film by release date
export const createFilmByReleaseDate = async (req: Request, res: Response): Promise<void> => {
    const { title, director, genres } = req.body;
    const releaseDate = req.body.releaseDate;

    const newFilm: IFilm = new Film({
        title,
        director,
        releaseDate,
        genres,
    });

    try {
        const savedFilm = await newFilm.save();
        res.status(201).json(savedFilm);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};
