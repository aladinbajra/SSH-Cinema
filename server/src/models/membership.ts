import mongoose, { Document, Schema } from 'mongoose';


export interface IMembership extends Document {
  userId: number;
  type: 'Basic' | 'Premium';
  startDate: Date;
  endDate: Date;
}


const MembershipSchema: Schema = new Schema({
  userId: { type: Number, required: true },
  type: { type: String, enum: ['Basic', 'Premium'], required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});


const Membership = mongoose.model<IMembership>('Membership', MembershipSchema);
export default Membership;
