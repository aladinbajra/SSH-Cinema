import { Request, Response } from 'express';
import Ticket from '../models/ticket';

// Create a new ticket
export const createTicket = async (req: Request, res: Response): Promise<void> => {
    const { userId, screeningId, seatNumber, price } = req.body;

    try {
        const newTicket = new Ticket({ userId, screeningId, seatNumber, price });
        const savedTicket = await newTicket.save();
        res.status(201).json(savedTicket);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// Get all tickets
export const getAllTickets = async (req: Request, res: Response): Promise<void> => {
    try {
        const tickets = await Ticket.find();
        res.json(tickets);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get a specific ticket by ID
export const getTicketById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
        const ticket = await Ticket.findById(id);
        if (!ticket) {
            res.status(404).json({ error: 'Ticket not found' });
            return;
        }
        res.json(ticket);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Update a ticket by ID
export const updateTicketById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { userId, screeningId, seatNumber, price } = req.body;

    try {
        const updatedTicket = await Ticket.findByIdAndUpdate(id, { userId, screeningId, seatNumber, price }, { new: true });
        if (!updatedTicket) {
            res.status(404).json({ error: 'Ticket not found' });
            return;
        }
        res.json(updatedTicket);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a ticket by ID
export const deleteTicketById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
        const deletedTicket = await Ticket.findByIdAndDelete(id);
        if (!deletedTicket) {
            res.status(404).json({ error: 'Ticket not found' });
            return;
        }
        res.json({ message: 'Ticket deleted successfully' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get tickets by price
export const getTicketsByPrice = async (req: Request, res: Response): Promise<void> => {
    const { price } = req.params;

    try {
        const tickets = await Ticket.find({ price: parseFloat(price) });
        res.json(tickets);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};

// Get tickets by seat number
export const getTicketsBySeatNumber = async (req: Request, res: Response): Promise<void> => {
    const { seatNumber } = req.params;

    try {
        const tickets = await Ticket.find({ seatNumber });
        res.json(tickets);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
