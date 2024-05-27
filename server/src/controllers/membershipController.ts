import { Request, Response } from 'express';
import Membership from '../models/membership';

// Create a new membership
export const createMembership = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId, type, startDate, endDate } = req.body;
        const newMembership = new Membership({ userId, type, startDate, endDate });
        const savedMembership = await newMembership.save();
        res.status(201).json(savedMembership);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// Get all memberships
export const getAllMemberships = async (req: Request, res: Response): Promise<void> => {
    try {
        const memberships = await Membership.find();
        res.json(memberships);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific membership by ID
export const getMembershipById = async (req: Request, res: Response): Promise<void> => {
    try {
        const membership = await Membership.findById(req.params.id);
        if (membership) {
            res.json(membership);
        } else {
            res.status(404).json({ message: 'Membership not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Update a membership
export const updateMembership = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId, type, startDate, endDate } = req.body;
        const updatedMembership = await Membership.findByIdAndUpdate(
            req.params.id,
            { userId, type, startDate, endDate },
            { new: true }
        );
        if (updatedMembership) {
            res.json(updatedMembership);
        } else {
            res.status(404).json({ message: 'Membership not found' });
        }
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a membership
export const deleteMembership = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedMembership = await Membership.findByIdAndDelete(req.params.id);
        if (deletedMembership) {
            res.json({ message: 'Membership deleted successfully' });
        } else {
            res.status(404).json({ message: 'Membership not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get memberships by start date
export const getMembershipsByStartDate = async (req: Request, res: Response): Promise<void> => {
    try {
        const { startDate } = req.params;
        const memberships = await Membership.find({ startDate });
        res.json(memberships);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get memberships by end date
export const getMembershipsByEndDate = async (req: Request, res: Response): Promise<void> => {
    try {
        const { endDate } = req.params;
        const memberships = await Membership.find({ endDate });
        res.json(memberships);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};


// Get memberships by userId
export const getMembershipsByUserId = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId } = req.params;
        const memberships = await Membership.find({ userId });
        res.json(memberships);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
