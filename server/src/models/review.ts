import mongoose, { Document, Schema } from "mongoose";

export interface IReview extends Document {
  userId: number;
  movieId: number;
  rating: number; // 1 to 5
  comment: string;
}

const ReviewSchema: Schema = new Schema({
  userId: { type: Number, required: true },
  movieId: { type: Number, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String, required: true },
});

const Review = mongoose.model<IReview>("Review", ReviewSchema);

export default Review;
