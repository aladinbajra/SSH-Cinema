import mongoose, { Document, Schema } from 'mongoose';


export interface IPaymentMethod extends Document {
  userId: number;
  cardNumber: string;
  expirationDate: Date;
  cvv: string;
}


const UserPaymentMethodSchema: Schema = new Schema({
  userId: { type: Number, required: true },
  cardNumber: { type: String, required: true },
  expirationDate: { type: Date, required: true },
  cvv: { type: String, required: true },
});


const UserPaymentMethod = mongoose.model<IPaymentMethod>('UserPaymentMethod', UserPaymentMethodSchema);

export default UserPaymentMethod;
