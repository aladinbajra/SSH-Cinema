import mongoose, { Document, Schema } from "mongoose";

export interface IFilmDirector extends Document {
  directorId: number;
  movieId: number;
}

const filmDirectorSchema: Schema = new Schema({
  directorId: { type: Number, required: true },
  movieId: { type: Number, required: true },
});

const filmDirector = mongoose.model<IFilmDirector>(
  "DirectorMovie",
  filmDirectorSchema
);

export default filmDirector;
