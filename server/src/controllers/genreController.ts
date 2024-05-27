import { Request, Response } from 'express';
import Genre from '../models/genre';


export const createGenre = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name } = req.body;
        const newGenre = new Genre({ name });
        const savedGenre = await newGenre.save();
        res.status(201).json(savedGenre);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};


export const getAllGenres = async (req: Request, res: Response): Promise<void> => {
    try {
        const genres = await Genre.find();
        res.json(genres);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};


export const getGenreById = async (req: Request, res: Response): Promise<void> => {
    try {
        const genre = await Genre.findById(req.params.id);
        if (genre) {
            res.json(genre);
        } else {
            res.status(404).json({ message: 'Genre not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};


export const updateGenre = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name } = req.body;
        const updatedGenre = await Genre.findByIdAndUpdate(req.params.id, { name }, { new: true });
        if (updatedGenre) {
            res.json(updatedGenre);
        } else {
            res.status(404).json({ message: 'Genre not found' });
        }
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteGenre = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedGenre = await Genre.findByIdAndDelete(req.params.id);
        if (deletedGenre) {
            res.json({ message: 'Genre deleted successfully' });
        } else {
            res.status(404).json({ message: 'Genre not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
