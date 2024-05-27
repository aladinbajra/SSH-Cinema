import { Schema, model, Document } from 'mongoose';

interface IUserAddress extends Document {
  id: number;
  userId: number;
  street: string;
  city: string;
  zipCode: string;
  country: string;
}


const UserAddressSchema = new Schema<IUserAddress>({
  id: { type: Number, required: true, unique: true },
  userId: { type: Number, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, required: true },
});


const UserAddress = model<IUserAddress>('UserAddress', UserAddressSchema);

export default UserAddress;
