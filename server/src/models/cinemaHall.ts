import mongoose, { Document, Schema } from 'mongoose';

// Define the Theater interface
export interface ITheater {
  id: number;
  name: string;
  location: string;
  capacity: number;
}

// Extend the interface to include Mongoose's Document interface
export interface ICinemaHallDocument extends ICinemaHall, Document {}

// Define the schema
const TheaterSchema: Schema = new Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  location: { type: String, required: true },
  capacity: { type: Number, required: true },
});

// Create the model
const Theater = mongoose.model<ICinemaHallDocument>('Theater', TheaterSchema);

export default Theater;
