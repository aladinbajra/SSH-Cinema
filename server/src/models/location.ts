import mongoose, { Document, Schema } from "mongoose";

export interface ILocation extends Document {
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

const LocationSchema: Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  postalCode: { type: String, required: true },
});

const Location = mongoose.model<ILocation>("Location", LocationSchema);

export default Location;
