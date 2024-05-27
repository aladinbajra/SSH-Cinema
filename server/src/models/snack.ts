import mongoose, { Document, Schema } from 'mongoose';


export interface ISnack extends Document {
  name: string;
  price: number;
  description: string;
}


const SnackSchema: Schema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});


const Snack = mongoose.model<ISnack>('Snack', SnackSchema);
export default Snack;
