import mongoose, { Document, Schema } from 'mongoose';

export interface IFilm extends Document {
  title: string;
  director: string;
  releaseDate: Date;
  genres: string[];
}

const FilmSchema: Schema = new Schema({
  title: { type: String, required: true },
  director: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  genres: { type: [String], required: true },
});


const Film = mongoose.model<IFilm>('Film', FilmSchema);

export default Film;
