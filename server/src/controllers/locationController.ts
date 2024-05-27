import { Request, Response } from 'express';
import Location from '../models/location';

// Create a new location
export const createLocation = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, address, city, state, country, postalCode } = req.body;
        const newLocation = new Location({ name, address, city, state, country, postalCode });
        const savedLocation = await newLocation.save();
        res.status(201).json(savedLocation);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// Get all locations
export const getAllLocations = async (req: Request, res: Response): Promise<void> => {
    try {
        const locations = await Location.find();
        res.json(locations);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific location by ID
export const getLocationById = async (req: Request, res: Response): Promise<void> => {
    try {
        const location = await Location.findById(req.params.id);
        if (location) {
            res.json(location);
        } else {
            res.status(404).json({ message: 'Location not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Update a location
export const updateLocation = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, address, city, state, country, postalCode } = req.body;
        const updatedLocation = await Location.findByIdAndUpdate(
            req.params.id,
            { name, address, city, state, country, postalCode },
            { new: true }
        );
        if (updatedLocation) {
            res.json(updatedLocation);
        } else {
            res.status(404).json({ message: 'Location not found' });
        }
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a location
export const deleteLocation = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedLocation = await Location.findByIdAndDelete(req.params.id);
        if (deletedLocation) {
            res.json({ message: 'Location deleted successfully' });
        } else {
            res.status(404).json({ message: 'Location not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
