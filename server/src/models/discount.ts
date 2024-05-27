import mongoose, { Document, Schema } from "mongoose";

export interface IDiscount {
  id: number;
  code: string;
  description: string;
  percentage: number;
  expirationDate: Date;
}

export interface IDiscountDocument extends IDiscount, Document {}

// Define the schema
const DiscountSchema: Schema = new Schema({
  id: { type: Number, required: true, unique: true },
  code: { type: String, required: true },
  description: { type: String, required: true },
  percentage: { type: Number, required: true, min: 0, max: 100 },
  expirationDate: { type: Date, required: true },
});

const Discount = mongoose.model<IDiscountDocument>("Discount", DiscountSchema);

export default Discount;
