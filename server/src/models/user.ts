import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  id: number;
  name: string;
  email: string;
  password: string;
}


const UserSchema = new Schema<IUser>({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});


const User = model<IUser>('User', UserSchema);

export default User;
