import { Request, Response } from 'express';
import User from '../models/user';

// Create a new user
export const createUser = async (req: Request, res: Response): Promise<void> => {
    const { name, email, password } = req.body;
    try {
        const newUser = new User({ name, email, password });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// Get all users
export const getAllUsers = async (_req: Request, res: Response): Promise<void> => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific user by ID
export const getUserById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.json(user);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Update a user by ID
export const updateUserById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, { name, email, password }, { new: true });
        if (!updatedUser) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.json(updatedUser);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a user by ID
export const deleteUserById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.json({ message: 'User deleted successfully' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new user by name
export const createUserByName = async (req: Request, res: Response): Promise<void> => {
    const { name } = req.body;
    try {
        const newUser = new User({ name });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// Update a user by email
export const updateUserByEmail = async (req: Request, res: Response): Promise<void> => {
    const { email, name } = req.body;
    try {
        const updatedUser = await User.findOneAndUpdate({ email }, { name }, { new: true });
        if (!updatedUser) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.json(updatedUser);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
