import { Request, Response } from 'express';
import NewsletterSubscription from '../models/newsLetterSubscription';


export const createSubscription = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, subscriptionDate } = req.body;
        const newSubscription = new NewsletterSubscription({ email, subscriptionDate });
        const savedSubscription = await newSubscription.save();
        res.status(201).json(savedSubscription);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};


export const getAllSubscriptions = async (req: Request, res: Response): Promise<void> => {
    try {
        const subscriptions = await NewsletterSubscription.find();
        res.json(subscriptions);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};


export const getSubscriptionById = async (req: Request, res: Response): Promise<void> => {
    try {
        const subscription = await NewsletterSubscription.findById(req.params.id);
        if (subscription) {
            res.json(subscription);
        } else {
            res.status(404).json({ message: 'Newsletter subscription not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};


export const updateSubscription = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, subscriptionDate } = req.body;
        const updatedSubscription = await NewsletterSubscription.findByIdAndUpdate(
            req.params.id,
            { email, subscriptionDate },
            { new: true }
        );
        if (updatedSubscription) {
            res.json(updatedSubscription);
        } else {
            res.status(404).json({ message: 'Newsletter subscription not found' });
        }
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};


export const deleteSubscription = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedSubscription = await NewsletterSubscription.findByIdAndDelete(req.params.id);
        if (deletedSubscription) {
            res.json({ message: 'Newsletter subscription deleted successfully' });
        } else {
            res.status(404).json({ message: 'Newsletter subscription not found' });
        }
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
};
