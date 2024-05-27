import mongoose, { Document, Schema } from 'mongoose';


export interface IRating extends Document {
  userId: number;
  movieId: number;
  rating: number; // 1 to 10
}


const RatingSchema: Schema = new Schema({
  userId: { type: Number, required: true },
  movieId: { type: Number, required: true },
  rating: { type: Number, required: true, min: 1, max: 10 },
});


const Rating = mongoose.model<IRating>('Rating', RatingSchema);

export default Rating;
