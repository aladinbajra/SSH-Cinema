import { Request, Response } from 'express';
import FilmActor, { IFilmActor } from '../models/filmActor';

// Create a new film-actor relation
export const createFilmActor = async (req: Request, res: Response): Promise<void> => {
    const { filmId, actorId } = req.body;

    const newFilmActor: IFilmActor = new FilmActor({
        filmId,
        actorId,
    });

    try {
        const savedFilmActor = await newFilmActor.save();
        res.status(201).json(savedFilmActor);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// Get all film-actor relations
export const getAllFilmActors = async (req: Request, res: Response): Promise<void> => {
    try {
        const filmActors = await FilmActor.find();
        res.json(filmActors);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get a film-actor relation by ID
export const getFilmActorById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
        const filmActor = await FilmActor.findById(id);
        if (!filmActor) {
            res.status(404).json({ message: 'Film-Actor relation not found' });
        } else {
            res.json(filmActor);
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a film-actor relation by ID
export const deleteFilmActor = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
        const deletedFilmActor = await FilmActor.findByIdAndDelete(id);
        if (!deletedFilmActor) {
            res.status(404).json({ message: 'Film-Actor relation not found' });
        } else {
            res.json({ message: 'Film-Actor relation deleted' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
