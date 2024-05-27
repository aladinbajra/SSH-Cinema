import mongoose, { Document, Schema } from 'mongoose';


export interface IScreening extends Document {
  movieId: number;
  theaterId: number;
  screeningTime: Date;
  availableSeats: string[]; // Array of seat numbers available for booking
}


const ScreeningSchema: Schema = new Schema({
  movieId: { type: Number, required: true },
  theaterId: { type: Number, required: true },
  screeningTime: { type: Date, required: true },
  availableSeats: { type: [String], default: [] },
});


const Screening = mongoose.model<IScreening>('Screening', ScreeningSchema);

export default Screening;
