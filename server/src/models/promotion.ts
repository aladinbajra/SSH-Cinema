import mongoose, { Document, Schema } from 'mongoose';


export interface IPromotion extends Document {
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  discountPercentage: number;
}


const PromotionSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  discountPercentage: { type: Number, required: true },
});


const Promotion = mongoose.model<IPromotion>('Promotion', PromotionSchema);
export default Promotion;
