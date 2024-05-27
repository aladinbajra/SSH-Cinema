import { Request, Response } from 'express';
import Rating from '../models/rating';

// Get all ratings
export const getAllRatings = async (req: Request, res: Response): Promise<void> => {
    try {
        const ratings = await Rating.find();
        res.json(ratings);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get rating by ID
export const getRatingById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const rating = await Rating.findById(id);
        if (!rating) {
            res.status(404).json({ message: 'Rating not found' });
            return;
        }
        res.json(rating);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new rating
export const createRating = async (req: Request, res: Response): Promise<void> => {
    const { userId, movieId, rating } = req.body;
    try {
        const newRating = new Rating({ userId, movieId, rating });
        const savedRating = await newRating.save();
        res.status(201).json(savedRating);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// Update a rating by ID
export const updateRatingById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { userId, movieId, rating } = req.body;
    try {
        const updatedRating = await Rating.findByIdAndUpdate(
            id,
            { userId, movieId, rating },
            { new: true }
        );
        if (!updatedRating) {
            res.status(404).json({ message: 'Rating not found' });
            return;
        }
        res.json(updatedRating);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a rating by ID
export const deleteRatingById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const deletedRating = await Rating.findByIdAndDelete(id);
        if (!deletedRating) {
            res.status(404).json({ message: 'Rating not found' });
            return;
        }
        res.json({ message: 'Rating deleted successfully' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
