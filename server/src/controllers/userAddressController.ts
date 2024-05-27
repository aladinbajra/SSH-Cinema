import { Request, Response } from 'express';
import UserAddress from '../models/userAddress';

// Get all user addresses
export const getAllUserAddresses = async (req: Request, res: Response): Promise<void> => {
    try {
        const userAddresses = await UserAddress.find();
        res.json(userAddresses);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
};

// Get a single user address by ID
export const getUserAddressById = async (req: Request, res: Response): Promise<void> => {
    try {
        const userAddress = await UserAddress.findOne({ id: Number(req.params.id) });
        if (!userAddress) {
            res.status(404).json({ error: 'User address not found' });
            return;
        }
        res.json(userAddress);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
};

// Create a new user address
export const createUserAddress = async (req: Request, res: Response): Promise<void> => {
    const { id, userId, street, city, zipCode, country } = req.body;
    const newUserAddress = new UserAddress({ id, userId, street, city, zipCode, country });

    try {
        const savedUserAddress = await newUserAddress.save();
        res.status(201).json(savedUserAddress);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(400).json({ error: errorMessage });
    }
};

// Update a user address by ID
export const updateUserAddressById = async (req: Request, res: Response): Promise<void> => {
    const { street, city, zipCode, country } = req.body;

    try {
        const updatedUserAddress = await UserAddress.findOneAndUpdate(
            { id: Number(req.params.id) },
            { street, city, zipCode, country },
            { new: true, runValidators: true }
        );
        if (!updatedUserAddress) {
            res.status(404).json({ error: 'User address not found' });
            return;
        }
        res.json(updatedUserAddress);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(400).json({ error: errorMessage });
    }
};

// Delete a user address by ID
export const deleteUserAddressById = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedUserAddress = await UserAddress.findOneAndDelete({ id: Number(req.params.id) });
        if (!deletedUserAddress) {
            res.status(404).json({ error: 'User address not found' });
            return;
        }
        res.json({ message: 'User address deleted successfully' });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
};

// Update a user address by street, city, and zip code
export const updateUserAddressByDetails = async (req: Request, res: Response): Promise<void> => {
    const { userId, street, city, zipCode, country } = req.body;

    try {
        const updatedUserAddress = await UserAddress.findOneAndUpdate(
            { userId, street, city, zipCode },
            { $set: req.body },
            { new: true }
        );

        if (!updatedUserAddress) {
            res.status(404).json({ error: 'User address not found' });
            return;
        }

        res.json(updatedUserAddress);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(400).json({ error: errorMessage });
    }
};
