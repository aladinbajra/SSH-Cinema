import mongoose, { Document, Schema } from "mongoose";

export interface IFilmActor extends Document {
  actorId: number;
  movieId: number;
}

const filmActorSchema: Schema = new Schema({
  actorId: { type: Number, required: true },
  movieId: { type: Number, required: true },
});

const FilmActor = mongoose.model<IFilmActor>("FilmActor", filmActorSchema);

export default ActorMovie;
