import { Request, Response } from 'express';
import UserPaymentMethod from '../models/paymentMethod';

// GET all user payment methods
export const getAllUserPaymentMethods = async (req: Request, res: Response): Promise<void> => {
    try {
        const userPaymentMethods = await UserPaymentMethod.find();
        res.json(userPaymentMethods);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// GET user payment method by ID
export const getUserPaymentMethodById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const userPaymentMethod = await UserPaymentMethod.findById(id);
        if (!userPaymentMethod) {
            res.status(404).json({ message: 'User payment method not found' });
            return;
        }
        res.json(userPaymentMethod);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// GET user payment method by card number
export const getUserPaymentMethodByCardNumber = async (req: Request, res: Response): Promise<void> => {
    const { cardNumber } = req.params;
    try {
        const userPaymentMethod = await UserPaymentMethod.findOne({ cardNumber });
        if (!userPaymentMethod) {
            res.status(404).json({ message: 'User payment method not found' });
            return;
        }
        res.json(userPaymentMethod);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// GET user payment method by CVV
export const getUserPaymentMethodByCVV = async (req: Request, res: Response): Promise<void> => {
    const { cvv } = req.params;
    try {
        const userPaymentMethod = await UserPaymentMethod.findOne({ cvv });
        if (!userPaymentMethod) {
            res.status(404).json({ message: 'User payment method not found' });
            return;
        }
        res.json(userPaymentMethod);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// POST create user payment method
export const createUserPaymentMethod = async (req: Request, res: Response): Promise<void> => {
    // Extract fields from request body
    const { userId, cardNumber, expirationDate, cvv } = req.body;
    try {
        const newUserPaymentMethod = await UserPaymentMethod.create({ userId, cardNumber, expirationDate, cvv });
        res.status(201).json(newUserPaymentMethod);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// PUT update user payment method by ID
export const updateUserPaymentMethodById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    // Extract fields from request body
    const { userId, cardNumber, expirationDate, cvv } = req.body;
    try {
        const updatedUserPaymentMethod = await UserPaymentMethod.findByIdAndUpdate(
            id,
            { userId, cardNumber, expirationDate, cvv },
            { new: true }
        );
        if (!updatedUserPaymentMethod) {
            res.status(404).json({ message: 'User payment method not found' });
            return;
        }
        res.json(updatedUserPaymentMethod);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// DELETE delete user payment method by ID
export const deleteUserPaymentMethodById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const deletedUserPaymentMethod = await UserPaymentMethod.findByIdAndDelete(id);
        if (!deletedUserPaymentMethod) {
            res.status(404).json({ message: 'User payment method not found' });
            return;
        }
        res.json({ message: 'User payment method deleted successfully' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
