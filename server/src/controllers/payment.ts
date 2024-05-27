import { Request, Response } from 'express';
import Payment from '../models/payment';


export const createPayment = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId, amount, paymentDate } = req.body;
        const newPayment = new Payment({ userId, amount, paymentDate });
        const savedPayment = await newPayment.save();
        res.status(201).json(savedPayment);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};


export const getAllPayments = async (req: Request, res: Response): Promise<void> => {
    try {
        // Check if paymentDate query parameter is provided
        const { paymentDate } = req.query;
        if (paymentDate) {
            
            const payments = await Payment.find({ paymentDate: new Date(paymentDate as string) });
            res.json(payments);
        } else {
            
            const payments = await Payment.find();
            res.json(payments);
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};


export const getPaymentById = async (req: Request, res: Response): Promise<void> => {
    try {
        const payment = await Payment.findById(req.params.id);
        if (payment) {
            res.json(payment);
        } else {
            res.status(404).json({ message: 'Payment not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};


export const updatePayment = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId, amount, paymentDate } = req.body;
        const updatedPayment = await Payment.findByIdAndUpdate(
            req.params.id,
            { userId, amount, paymentDate },
            { new: true }
        );
        if (updatedPayment) {
            res.json(updatedPayment);
        } else {
            res.status(404).json({ message: 'Payment not found' });
        }
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};


export const deletePayment = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedPayment = await Payment.findByIdAndDelete(req.params.id);
        if (deletedPayment) {
            res.json({ message: 'Payment deleted successfully' });
        } else {
            res.status(404).json({ message: 'Payment not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
