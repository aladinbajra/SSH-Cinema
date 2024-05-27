import { Request, Response } from 'express';
import Promotion from '../models/promotion';

// Get all promotions
export const getAllPromotions = async (req: Request, res: Response): Promise<void> => {
    try {
        const promotions = await Promotion.find();
        res.json(promotions);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get promotion by ID
export const getPromotionById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const promotion = await Promotion.findById(id);
        if (!promotion) {
            res.status(404).json({ message: 'Promotion not found' });
            return;
        }
        res.json(promotion);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new promotion
export const createPromotion = async (req: Request, res: Response): Promise<void> => {
    const { name, description, startDate, endDate, discountPercentage } = req.body;
    try {
        const newPromotion = new Promotion({ name, description, startDate, endDate, discountPercentage });
        const savedPromotion = await newPromotion.save();
        res.status(201).json(savedPromotion);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// Update a promotion by ID
export const updatePromotionById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { name, description, startDate, endDate, discountPercentage } = req.body;
    try {
        const updatedPromotion = await Promotion.findByIdAndUpdate(
            id,
            { name, description, startDate, endDate, discountPercentage },
            { new: true }
        );
        if (!updatedPromotion) {
            res.status(404).json({ message: 'Promotion not found' });
            return;
        }
        res.json(updatedPromotion);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a promotion by ID
export const deletePromotionById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const deletedPromotion = await Promotion.findByIdAndDelete(id);
        if (!deletedPromotion) {
            res.status(404).json({ message: 'Promotion not found' });
            return;
        }
        res.json({ message: 'Promotion deleted successfully' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};


// Get promotion by promotionPercentage
export const getPromotionByPercentage = async (req: Request, res: Response): Promise<void> => {
    const { promotionPercentage } = req.params;
    try {
        const promotion = await Promotion.findOne({ promotionPercentage });
        if (!promotion) {
            res.status(404).json({ message: 'Promotion not found' });
            return;
        }
        res.json(promotion);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Update a promotion by promotionPercentage
export const updatePromotionByPercentage = async (req: Request, res: Response): Promise<void> => {
    const { promotionPercentage } = req.params;
    const { name, description, startDate, endDate, discountPercentage } = req.body;
    try {
        const updatedPromotion = await Promotion.findOneAndUpdate(
            { promotionPercentage },
            { name, description, startDate, endDate, discountPercentage },
            { new: true }
        );
        if (!updatedPromotion) {
            res.status(404).json({ message: 'Promotion not found' });
            return;
        }
        res.json(updatedPromotion);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};
