import mongoose from "mongoose";
interface IFilm {
  title: string;
  director: string;
  releaseDate: Date;
  genres: string[];
}
const filmSchema = new mongoose.Schema<IFilm>({
  title: { type: String, required: true },
  director: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  genres: [{ type: String }],
});
const FilmModel = mongoose.model<IFilm & mongoose.Document>("Film", filmSchema);
export default FilmModel;
