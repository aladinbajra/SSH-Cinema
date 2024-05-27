import { Request, Response } from 'express';
import Review from '../models/review';


export const getAllReviews = async (req: Request, res: Response): Promise<void> => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};


export const getReviewById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const review = await Review.findById(id);
        if (!review) {
            res.status(404).json({ message: 'Review not found' });
            return;
        }
        res.json(review);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};


export const createReview = async (req: Request, res: Response): Promise<void> => {
    const { userId, movieId, rating, comment } = req.body;
    try {
        const newReview = new Review({ userId, movieId, rating, comment });
        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};


export const updateReviewById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { userId, movieId, rating, comment } = req.body;
    try {
        const updatedReview = await Review.findByIdAndUpdate(
            id,
            { userId, movieId, rating, comment },
            { new: true }
        );
        if (!updatedReview) {
            res.status(404).json({ message: 'Review not found' });
            return;
        }
        res.json(updatedReview);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};


export const deleteReviewById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const deletedReview = await Review.findByIdAndDelete(id);
        if (!deletedReview) {
            res.status(404).json({ message: 'Review not found' });
            return;
        }
        res.json({ message: 'Review deleted successfully' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
