import { Request, Response } from 'express';
import Discount from '../models/discount';

// Create a new discount
export const createDiscount = async (req: Request, res: Response): Promise<void> => {
  const { id, code, description, percentage, expirationDate } = req.body;

  const newDiscount = new Discount({
    id,
    code,
    description,
    percentage,
    expirationDate,
  });

  try {
    const savedDiscount = await newDiscount.save();
    res.status(201).json(savedDiscount);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

// Get all discounts
export const getAllDiscounts = async (req: Request, res: Response): Promise<void> => {
  try {
    const discounts = await Discount.find();
    res.json(discounts);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Get a discount by ID
export const getDiscountById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const discount = await Discount.findById(id);
    if (!discount) {
      res.status(404).json({ message: 'Discount not found' });
    } else {
      res.json(discount);
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Update a discount
export const updateDiscount = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { code, description, percentage, expirationDate } = req.body;

  try {
    const updatedDiscount = await Discount.findByIdAndUpdate(id, {
      code,
      description,
      percentage,
      expirationDate,
    }, { new: true });
    if (!updatedDiscount) {
      res.status(404).json({ message: 'Discount not found' });
    } else {
      res.json(updatedDiscount);
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a discount
export const deleteDiscount = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const deletedDiscount = await Discount.findByIdAndDelete(id);
    if (!deletedDiscount) {
      res.status(404).json({ message: 'Discount not found' });
    } else {
      res.json({ message: 'Discount deleted' });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
