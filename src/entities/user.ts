import { model, Schema } from 'mongoose';

export interface IUser {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  status: boolean;
  role: string;
}

const schema = new Schema<IUser>({
  email: {type: String, required: true},
  password: {type: String, required: true},
  firstname: String,
  lastname: String,
  status: {type: Boolean},
  role: {type: String, required: true},
});

export const User = model<IUser>('Users', schema);
