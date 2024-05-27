import mongoose, { Document, Schema } from "mongoose";

export interface IPayment extends Document {
  userId: number;
  amount: number;
  paymentDate: Date;
}

const PaymentSchema: Schema = new Schema({
  userId: { type: Number, required: true },
  amount: { type: Number, required: true },
  paymentDate: { type: Date, required: true },
});

const Payment = mongoose.model<IPayment>("Payment", PaymentSchema);

export default Payment;
